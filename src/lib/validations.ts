import { z } from "zod";

// UK phone number regex - accepts various formats
const ukPhoneRegex = /^(?:(?:\+44\s?|0)(?:7\d{3}|\d{2,4})\s?\d{3}\s?\d{3,4})$/;

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(ukPhoneRegex, "Please enter a valid UK phone number")
    .or(z.string().min(10, "Please enter a valid phone number")),
  company: z.string().optional(),
  financeType: z.enum([
    "bridging",
    "development",
    "btl",
    "asset",
    "invoice",
    "general",
  ]),
  loanAmount: z.number().positive().optional(),
  propertyValue: z.number().positive().optional(),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
});

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export const calculatorLeadSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

export const bridgingCalculatorSchema = z.object({
  propertyValue: z.number().positive("Property value must be positive"),
  loanAmount: z.number().positive("Loan amount must be positive"),
  termMonths: z.number().min(1).max(24, "Term must be between 1 and 24 months"),
  interestRate: z.number().min(0.5).max(3, "Interest rate must be between 0.5% and 3%").optional(),
});

export const developmentCalculatorSchema = z.object({
  purchasePrice: z.number().positive("Purchase price must be positive"),
  buildCosts: z.number().positive("Build costs must be positive"),
  gdv: z.number().positive("GDV must be positive"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CalculatorLeadData = z.infer<typeof calculatorLeadSchema>;
export type BridgingCalculatorData = z.infer<typeof bridgingCalculatorSchema>;
export type DevelopmentCalculatorData = z.infer<typeof developmentCalculatorSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
