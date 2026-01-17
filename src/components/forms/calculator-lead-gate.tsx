"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { calculatorLeadSchema, type CalculatorLeadData } from "@/lib/validations";
import { toast } from "sonner";

interface CalculatorLeadGateProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  calculatorType: string;
  calculatorData: Record<string, unknown>;
}

export function CalculatorLeadGate({
  isOpen,
  onClose,
  onSuccess,
  calculatorType,
  calculatorData,
}: CalculatorLeadGateProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CalculatorLeadData>({
    resolver: zodResolver(calculatorLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(data: CalculatorLeadData) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          financeType: calculatorType,
          source: `/calculator#${calculatorType}`,
          calculatorData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Details submitted! Your results are below.");
      onSuccess();
    } catch (error) {
      console.error("[Calculator Lead Gate] Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>See Your Results</DialogTitle>
          <DialogDescription>
            Enter your details to view your personalised calculation results.
            We&apos;ll also send you a copy by email.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="07123 456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? "Loading..." : "View My Results"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to our{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
