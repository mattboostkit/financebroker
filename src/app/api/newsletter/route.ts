import { NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!convexUrl) {
      // Convex not configured - log and return success for now
      console.log("[Newsletter] Convex not configured. Email:", email);
      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing!",
      });
    }

    const client = new ConvexHttpClient(convexUrl);
    const result = await client.mutation(api.newsletter.subscribe, {
      email,
      source: source || "website",
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("[Newsletter] Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
