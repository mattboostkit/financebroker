import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createLead = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.optional(v.string()),
    financeType: v.union(
      v.literal("bridging"),
      v.literal("development"),
      v.literal("btl"),
      v.literal("asset"),
      v.literal("invoice"),
      v.literal("general")
    ),
    loanAmount: v.optional(v.number()),
    propertyValue: v.optional(v.number()),
    message: v.optional(v.string()),
    source: v.string(),
    calculatorData: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const leadId = await ctx.db.insert("leads", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });
    return leadId;
  },
});

export const getLeads = query({
  args: {
    status: v.optional(
      v.union(
        v.literal("new"),
        v.literal("contacted"),
        v.literal("qualified"),
        v.literal("converted")
      )
    ),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query("leads")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .collect();
    }
    return await ctx.db.query("leads").order("desc").collect();
  },
});

export const updateLeadStatus = mutation({
  args: {
    leadId: v.id("leads"),
    status: v.union(
      v.literal("new"),
      v.literal("contacted"),
      v.literal("qualified"),
      v.literal("converted")
    ),
  },
  handler: async (ctx, args) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await ctx.db.patch(args.leadId as any, { status: args.status });
  },
});

export const getLeadsByFinanceType = query({
  args: {
    financeType: v.union(
      v.literal("bridging"),
      v.literal("development"),
      v.literal("btl"),
      v.literal("asset"),
      v.literal("invoice"),
      v.literal("general")
    ),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("leads")
      .withIndex("by_financeType", (q) => q.eq("financeType", args.financeType))
      .order("desc")
      .collect();
  },
});
