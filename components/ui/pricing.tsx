"use client";
import '@/styles/bento.css';

import Link from "next/link";
import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const planDetails = [
    {
      name: "Free",
      basePrice: 0,
      features: [
        "2 prompts daily",
        "7 day refund",
        "24/7 Customer support",
        "All widget access",
      ],
    },
    {
      name: "Content Creator",
      basePrice: 20,
      isMostPopular: true,
      features: [
        "Instagram Post Generator",
        "Instagram Hashtag Generator",
        "Instagram Post Idea",
        "Youtube SEO suggestion",
        "and many more",
      ],
    },
    {
      name: "Career Pack",
      basePrice: 18,
      features: [
        "LinkedIn Post Generator",
        "Resume Tailoring Tool",
        "Cover Letter Design",
        "Cold Mail Generator",
      ],
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-deep border-t border-brand-light/12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-widest bg-brand-mid/15 border border-brand-light/25 text-brand-light"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-3 font-bold tracking-tight text-brand-cream text-3xl sm:text-4xl"
          >
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-base text-brand-cream/55"
          >
            Start with a 7-day free trial. No credit card required.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {planDetails.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.isMostPopular
                  ? "bento-card bg-brand-mid/16 border-brand-light/30 featured-pulse"
                  : "bento-card"
              }`}
            >
              {plan.isMostPopular && (
                <div className="absolute -top-3 right-8 text-[10px] tracking-wider font-bold uppercase px-3 py-1 rounded-full bg-brand-mid text-brand-cream">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2 text-brand-cream">
                {plan.name}
              </h3>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-brand-cream">
                  ${plan.basePrice}
                </span>
                <span className="text-sm ml-2 text-brand-light/60">
                  / month
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-cream/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`w-full text-center py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  plan.isMostPopular
                    ? "bg-brand-mid text-brand-cream hover:bg-brand-mid/90"
                    : "bg-brand-mid/20 text-brand-cream/80 border border-brand-light/20 hover:bg-brand-mid/30"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-brand-cream/50">
            Need more options?{" "}
            <Link
              href="#"
              className="text-brand-light hover:text-brand-light/80 underline underline-offset-2 transition-colors"
            >
              See More Plans
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;