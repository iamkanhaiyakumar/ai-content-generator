"use client";

import React, { useContext, useMemo, useState } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CreditCard,
  FileText,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CREDIT_LIMIT = 100000;

const plans = [
  {
    name: "Free",
    description: "Start creating with core AI tools.",
    monthlyPrice: 0,
    credits: "10,000 credits",
    icon: Sparkles,
    current: true,
    features: [
      "Access to basic templates",
      "AI content generation",
      "History tracking",
      "Community support",
    ],
    cta: "Current Plan",
  },
  {
    name: "Content Creator",
    description: "For creators publishing more often.",
    monthlyPrice: 20,
    credits: "100,000 credits",
    icon: FileText,
    popular: true,
    features: [
      "Everything in Free",
      "100,000 monthly credits",
      "Priority generation speed",
      "Advanced writing templates",
      "Email support",
    ],
    cta: "Upgrade Now",
  },
  {
    name: "Career Pack",
    description: "For resumes, profiles, and job content.",
    monthlyPrice: 18,
    credits: "80,000 credits",
    icon: BriefcaseBusiness,
    features: [
      "Everything in Free",
      "80,000 monthly credits",
      "Resume and cover letter tools",
      "LinkedIn profile content",
      "Interview prep prompts",
    ],
    cta: "Choose Career Pack",
  },
];

const comparisonRows = [
  {
    feature: "Monthly credits",
    free: "10,000",
    creator: "100,000",
    career: "80,000",
  },
  {
    feature: "AI templates",
    free: "Basic",
    creator: "Advanced",
    career: "Career focused",
  },
  {
    feature: "Content history",
    free: "Limited",
    creator: "Full",
    career: "Full",
  },
  {
    feature: "Priority generation",
    free: false,
    creator: true,
    career: true,
  },
  {
    feature: "Support",
    free: "Community",
    creator: "Email",
    career: "Email",
  },
  {
    feature: "7-day money-back guarantee",
    free: false,
    creator: true,
    career: true,
  },
];

const faqs = [
  {
    question: "How do credits work?",
    answer:
      "Credits are consumed as AI responses are generated. Longer outputs use more credits, and your current usage is shown on this page and in the sidebar.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Paid plans include a 7-day money-back guarantee. If the plan is not a fit, contact support within 7 days of purchase.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "The Free plan acts as your trial. You can explore templates, generate content, and upgrade when you need more credits or priority features.",
  },
];

function Billing() {
  const { totalUsage = 0 } = useContext(TotalUsageContext);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [openFaq, setOpenFaq] = useState<number>(0);

  const usagePercent = Math.min((Number(totalUsage) / CREDIT_LIMIT) * 100, 100);

  const pricedPlans = useMemo(
    () =>
      plans.map((plan) => {
        const yearlyMonthlyPrice = plan.monthlyPrice * 0.8;
        return {
          ...plan,
          displayedPrice:
            billingCycle === "yearly" ? yearlyMonthlyPrice : plan.monthlyPrice,
          billedYearly:
            billingCycle === "yearly" && plan.monthlyPrice > 0
              ? yearlyMonthlyPrice * 12
              : null,
        };
      }),
    [billingCycle]
  );

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="overflow-hidden rounded-lg bg-gradient-to-r from-[#704ef8] via-[#4f7cff] to-[#17a589] text-white shadow-sm">
          <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wide text-white/75">
                Billing
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                Upgrade your plan
              </h1>
              <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">
                Choose the credit limit and features that match your content
                workflow. Switch to yearly billing to save 20%.
              </p>
            </div>

            <div className="w-full rounded-lg bg-white/15 p-1 backdrop-blur sm:w-auto">
              <div className="grid grid-cols-2 gap-1">
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    billingCycle === "monthly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("yearly")}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    billingCycle === "yearly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Yearly -20%
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Zap className="h-4 w-4 text-[#704ef8]" />
                Live credit usage
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {Number(totalUsage).toLocaleString()} of{" "}
                {CREDIT_LIMIT.toLocaleString()} credits used this month.
              </p>
            </div>
            <div className="w-full md:max-w-md">
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#704ef8]"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
              <p className="mt-2 text-right text-xs font-medium text-slate-500">
                {Math.round(usagePercent)}% used
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {pricedPlans.map((plan) => {
            const Icon = plan.icon;

            return (
              <Card
                key={plan.name}
                className={`relative flex flex-col rounded-lg border-slate-200 shadow-sm ${
                  plan.popular
                    ? "border-[#704ef8] ring-2 ring-[#704ef8]/20"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#704ef8] px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-[#704ef8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-5">
                  <div>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold text-slate-950">
                        ${formatPrice(plan.displayedPrice)}
                      </span>
                      <span className="pb-1 text-sm text-slate-500">/mo</span>
                    </div>
                    {plan.billedYearly && (
                      <p className="mt-1 text-xs text-slate-500">
                        ${formatPrice(plan.billedYearly)} billed yearly
                      </p>
                    )}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                    <CreditCard className="h-3.5 w-3.5 text-[#704ef8]" />
                    {plan.credits}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-slate-700"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    disabled={plan.current}
                    variant={plan.current ? "secondary" : "default"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </section>

        <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <h2 className="text-xl font-semibold text-slate-950">
              Feature comparison
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Compare credits, tools, and support across every plan.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-5 py-3 font-semibold">Feature</th>
                  <th className="px-5 py-3 font-semibold">Free</th>
                  <th className="px-5 py-3 font-semibold">Content Creator</th>
                  <th className="px-5 py-3 font-semibold">Career Pack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-5 py-4 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      <ComparisonValue value={row.free} />
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      <ComparisonValue value={row.creator} />
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      <ComparisonValue value={row.career} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5">
              <h2 className="text-xl font-semibold text-slate-950">FAQ</h2>
              <p className="mt-1 text-sm text-slate-600">
                Common billing and plan questions.
              </p>
            </div>
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900"
                    >
                      {faq.question}
                      <ChevronDown
                        className={`h-4 w-4 flex-none text-slate-500 transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-5 text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-emerald-950 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold">7-day guarantee</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-emerald-900">
              Try any paid plan for a full week. If it does not fit your
              workflow, request a refund within 7 days.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
              <BadgeCheck className="h-4 w-4" />
              Money-back guarantee included
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ComparisonValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-emerald-600" aria-label="Included" />
    ) : (
      <X className="h-5 w-5 text-slate-300" aria-label="Not included" />
    );
  }

  return <span>{value}</span>;
}

function formatPrice(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}

export default Billing;
