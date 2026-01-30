"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calculator, Building, TrendingUp, PoundSterling } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculatorLeadGate } from "@/components/forms/calculator-lead-gate";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function BridgingCalculator() {
  const shouldReduceMotion = useReducedMotion();
  const [propertyValue, setPropertyValue] = useState<number>(500000);
  const [loanAmount, setLoanAmount] = useState<number>(375000);
  const [termMonths, setTermMonths] = useState<number>(12);
  const [interestRate, setInterestRate] = useState<number>(0.75);
  const [showGate, setShowGate] = useState(false);
  const [resultsUnlocked, setResultsUnlocked] = useState(false);

  const ltv = (loanAmount / propertyValue) * 100;
  const monthlyInterest = loanAmount * (interestRate / 100);
  const totalInterest = monthlyInterest * termMonths;
  const arrangementFee = loanAmount * 0.02;
  const totalCost = totalInterest + arrangementFee;

  const handleCalculate = () => {
    if (!resultsUnlocked) {
      setShowGate(true);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Building className="h-5 w-5 text-secondary" />
          <CardTitle>Bridging Finance Calculator</CardTitle>
        </div>
        <CardDescription>
          Estimate the cost of a bridging loan for your property transaction.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="propertyValue">Property Value</Label>
            <div className="relative">
              <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="propertyValue"
                type="number"
                className="pl-9"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount Required</Label>
            <div className="relative">
              <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="loanAmount"
                type="number"
                className="pl-9"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="termMonths">Term (Months)</Label>
            <Input
              id="termMonths"
              type="number"
              min={1}
              max={24}
              value={termMonths}
              onChange={(e) => setTermMonths(Number(e.target.value))}
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Monthly Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              step={0.05}
              min={0.4}
              max={2}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              autoComplete="off"
            />
          </div>
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>

        {resultsUnlocked && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className="bg-muted rounded-lg p-6 space-y-4"
          >
            <h4 className="font-semibold text-lg">Indicative Results</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Loan to Value (LTV)</p>
                <p className="text-2xl font-bold">{ltv.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Interest</p>
                <p className="text-2xl font-bold">{formatCurrency(monthlyInterest)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Interest</p>
                <p className="text-2xl font-bold">{formatCurrency(totalInterest)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Arrangement Fee (est. 2%)</p>
                <p className="text-2xl font-bold">{formatCurrency(arrangementFee)}</p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">Estimated Total Cost</p>
              <p className="text-3xl font-bold text-secondary">{formatCurrency(totalCost)}</p>
            </div>
            <p className="text-xs text-muted-foreground">
              These figures are indicative only. Actual terms depend on your circumstances, property,
              and chosen lender. Contact us for a personalised quote.
            </p>
          </motion.div>
        )}

        <CalculatorLeadGate
          isOpen={showGate}
          onClose={() => setShowGate(false)}
          onSuccess={() => {
            setShowGate(false);
            setResultsUnlocked(true);
          }}
          calculatorType="bridging"
          calculatorData={{ propertyValue, loanAmount, termMonths, interestRate }}
        />
      </CardContent>
    </Card>
  );
}

function DevelopmentCalculator() {
  const shouldReduceMotion = useReducedMotion();
  const [purchasePrice, setPurchasePrice] = useState<number>(500000);
  const [buildCosts, setBuildCosts] = useState<number>(300000);
  const [gdv, setGdv] = useState<number>(1200000);
  const [showGate, setShowGate] = useState(false);
  const [resultsUnlocked, setResultsUnlocked] = useState(false);

  const totalCosts = purchasePrice + buildCosts;
  const estimatedFacility = totalCosts * 0.85; // 85% LTC
  const ltgdv = (estimatedFacility / gdv) * 100;
  const ltc = (estimatedFacility / totalCosts) * 100;
  const profit = gdv - totalCosts;
  const profitOnGdv = (profit / gdv) * 100;

  const handleCalculate = () => {
    if (!resultsUnlocked) {
      setShowGate(true);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-secondary" />
          <CardTitle>Development Finance Calculator</CardTitle>
        </div>
        <CardDescription>
          Estimate the funding available for your development project.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="purchasePrice">Site Purchase Price</Label>
            <div className="relative">
              <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="purchasePrice"
                type="number"
                className="pl-9"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="buildCosts">Total Build Costs</Label>
            <div className="relative">
              <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="buildCosts"
                type="number"
                className="pl-9"
                value={buildCosts}
                onChange={(e) => setBuildCosts(Number(e.target.value))}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="gdv">Gross Development Value (GDV)</Label>
            <div className="relative">
              <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="gdv"
                type="number"
                className="pl-9"
                value={gdv}
                onChange={(e) => setGdv(Number(e.target.value))}
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>

        {resultsUnlocked && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className="bg-muted rounded-lg p-6 space-y-4"
          >
            <h4 className="font-semibold text-lg">Indicative Results</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Total Project Costs</p>
                <p className="text-2xl font-bold">{formatCurrency(totalCosts)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Facility Size</p>
                <p className="text-2xl font-bold">{formatCurrency(estimatedFacility)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Loan to GDV</p>
                <p className="text-2xl font-bold">{ltgdv.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Loan to Cost</p>
                <p className="text-2xl font-bold">{ltc.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gross Profit</p>
                <p className="text-2xl font-bold">{formatCurrency(profit)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Profit on GDV</p>
                <p className="text-2xl font-bold text-secondary">{profitOnGdv.toFixed(1)}%</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Facility size based on 85% LTC. Actual terms depend on project details, experience,
              and lender criteria. Contact us for a detailed assessment.
            </p>
          </motion.div>
        )}

        <CalculatorLeadGate
          isOpen={showGate}
          onClose={() => setShowGate(false)}
          onSuccess={() => {
            setShowGate(false);
            setResultsUnlocked(true);
          }}
          calculatorType="development"
          calculatorData={{ purchasePrice, buildCosts, gdv }}
        />
      </CardContent>
    </Card>
  );
}

function LTVCalculator() {
  const [propertyValue, setPropertyValue] = useState<number>(500000);
  const [loanRequired, setLoanRequired] = useState<number>(350000);

  const ltv = (loanRequired / propertyValue) * 100;
  const maxLtv75 = propertyValue * 0.75;
  const maxLtv65 = propertyValue * 0.65;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-secondary" />
          <CardTitle>LTV Calculator</CardTitle>
        </div>
        <CardDescription>
          Calculate your Loan to Value ratio and see maximum borrowing options.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="ltvPropertyValue">Property Value</Label>
            <div className="relative">
              <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="ltvPropertyValue"
                type="number"
                className="pl-9"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ltvLoanRequired">Loan Required</Label>
            <div className="relative">
              <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="ltvLoanRequired"
                type="number"
                className="pl-9"
                value={loanRequired}
                onChange={(e) => setLoanRequired(Number(e.target.value))}
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-6 space-y-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Your LTV</p>
            <p className={`text-4xl font-bold ${ltv <= 75 ? "text-secondary" : "text-destructive"}`}>
              {ltv.toFixed(1)}%
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Max at 65% LTV</p>
              <p className="text-xl font-semibold">{formatCurrency(maxLtv65)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Max at 75% LTV</p>
              <p className="text-xl font-semibold">{formatCurrency(maxLtv75)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Finance Calculators
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Get instant indicative figures for your funding requirements. These
              calculators provide estimates only - contact us for accurate,
              personalised quotes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="bridging" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="bridging">Bridging</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="ltv">LTV</TabsTrigger>
            </TabsList>
            <TabsContent value="bridging">
              <BridgingCalculator />
            </TabsContent>
            <TabsContent value="development">
              <DevelopmentCalculator />
            </TabsContent>
            <TabsContent value="ltv">
              <LTVCalculator />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Accurate Figures?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            These calculators provide indicative estimates only. For accurate quotes
            tailored to your specific circumstances, speak to our team.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get a Personalised Quote</a>
          </Button>
        </div>
      </section>
    </>
  );
}
