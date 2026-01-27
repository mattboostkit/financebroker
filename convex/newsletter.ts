import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const subscribe = mutation({
  args: {
    email: v.string(),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if already subscribed
    const existing = await ctx.db
      .query("newsletterSubscriptions")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      return { success: true, message: "Already subscribed" };
    }

    await ctx.db.insert("newsletterSubscriptions", {
      email: args.email,
      source: args.source,
      subscribedAt: Date.now(),
    });

    return { success: true, message: "Subscribed successfully" };
  },
});
