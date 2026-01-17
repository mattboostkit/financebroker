import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
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
    source: v.string(), // page URL
    calculatorData: v.optional(v.any()),
    status: v.union(
      v.literal("new"),
      v.literal("contacted"),
      v.literal("qualified"),
      v.literal("converted")
    ),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"])
    .index("by_financeType", ["financeType"])
    .index("by_createdAt", ["createdAt"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    createdAt: v.number(),
  }).index("by_createdAt", ["createdAt"]),

  calculatorSubmissions: defineTable({
    type: v.union(
      v.literal("ltv"),
      v.literal("repayment"),
      v.literal("bridging"),
      v.literal("development")
    ),
    inputs: v.any(),
    results: v.any(),
    leadId: v.optional(v.id("leads")),
    createdAt: v.number(),
  }).index("by_type", ["type"]),

  newsletterSubscriptions: defineTable({
    email: v.string(),
    subscribedAt: v.number(),
    source: v.string(),
  }).index("by_email", ["email"]),
});
