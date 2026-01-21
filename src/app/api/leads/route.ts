import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Initialize Convex client
const convex = process.env.NEXT_PUBLIC_CONVEX_URL
  ? new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      financeType,
      loanAmount,
      propertyValue,
      message,
      source,
      calculatorData,
    } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the lead for debugging
    console.log("[Lead] New submission:", {
      name,
      email,
      financeType,
      source,
      timestamp: new Date().toISOString(),
    });

    // Save to Convex database
    if (convex) {
      try {
        const leadId = await convex.mutation(api.leads.createLead, {
          name,
          email,
          phone,
          company: company || undefined,
          financeType: financeType || "general",
          loanAmount: loanAmount ? Number(loanAmount) : undefined,
          propertyValue: propertyValue ? Number(propertyValue) : undefined,
          message: message || undefined,
          source,
          calculatorData: calculatorData || undefined,
        });
        console.log("[Convex] Lead saved with ID:", leadId);
      } catch (convexError) {
        console.error("[Convex] Error saving lead:", convexError);
        // Don't fail the request if Convex fails
      }
    }

    // Send notification email to broker
    if (resend && process.env.NOTIFICATION_EMAIL) {
      const emailResult = await resend.emails.send({
        from: "Aegis Finance <notifications@aegisfinance.co.uk>",
        to: [process.env.NOTIFICATION_EMAIL],
        subject: `New Lead: ${financeType} enquiry from ${name}`,
        html: `
          <h2>New Lead Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <p><strong>Finance Type:</strong> ${financeType}</p>
          ${loanAmount ? `<p><strong>Loan Amount:</strong> £${loanAmount.toLocaleString()}</p>` : ""}
          ${propertyValue ? `<p><strong>Property Value:</strong> £${propertyValue.toLocaleString()}</p>` : ""}
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
          <p><strong>Source:</strong> ${source}</p>
          ${calculatorData ? `<p><strong>Calculator Data:</strong> ${JSON.stringify(calculatorData)}</p>` : ""}
          <hr />
          <p><em>Received at: ${new Date().toLocaleString("en-GB")}</em></p>
        `,
      });

      console.log("[Email] Sent notification to broker, ID:", emailResult.data?.id);
    }

    // Send BoostKit/GHL webhook if configured
    if (process.env.BOOSTKIT_WEBHOOK_URL) {
      try {
        await fetch(process.env.BOOSTKIT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            company,
            financeType,
            loanAmount,
            propertyValue,
            message,
            source,
            calculatorData,
            submittedAt: new Date().toISOString(),
          }),
        });
        console.log("[BoostKit] Webhook sent successfully");
      } catch (webhookError) {
        console.error("[BoostKit] Webhook failed:", webhookError);
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Lead API] Error:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
