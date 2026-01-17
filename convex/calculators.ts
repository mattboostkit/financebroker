import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const saveCalculatorSubmission = mutation({
  args: {
    type: v.union(
      v.literal("ltv"),
      v.literal("repayment"),
      v.literal("bridging"),
      v.literal("development")
    ),
    inputs: v.any(),
    results: v.any(),
    leadId: v.optional(v.id("leads")),
  },
  handler: async (ctx, args) => {
    const submissionId = await ctx.db.insert("calculatorSubmissions", {
      ...args,
      createdAt: Date.now(),
    });
    return submissionId;
  },
});

export const getCalculatorSubmissions = query({
  args: {
    type: v.optional(
      v.union(
        v.literal("ltv"),
        v.literal("repayment"),
        v.literal("bridging"),
        v.literal("development")
      )
    ),
  },
  handler: async (ctx, args) => {
    if (args.type) {
      return await ctx.db
        .query("calculatorSubmissions")
        .withIndex("by_type", (q) => q.eq("type", args.type!))
        .order("desc")
        .collect();
    }
    return await ctx.db.query("calculatorSubmissions").order("desc").collect();
  },
});
