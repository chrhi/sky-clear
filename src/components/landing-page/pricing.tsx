"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Crown,
  Zap,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const PricingComponent = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      name: "Free Tier",
      price: "0",
      messageLimit: "Up to 1,000",
      features: [
        "Up to 1,000 free automated messages/month",
        "Basic AI response generation",
        "Limited keyword triggers",
        "Community support channel",
      ],
      mostPopular: false,
      buttonText: "Start for Free",
      icon: <Zap className="w-7 h-7 text-rose-500" />,
      highlightColor: "border-gray-200 hover:border-rose-300",
      background: "bg-white hover:bg-rose-50/30",
      subtext: "Perfect for small teams and individual users",
    },
    {
      name: "Pro Plan",
      price: "25",
      messageLimit: "Unlimited",
      features: [
        "Unlimited automated messages",
        "Advanced AI response generation",
        "Unlimited custom keyword triggers",
        "Detailed engagement analytics",
        "Priority email & chat support",
      ],
      mostPopular: true,
      buttonText: "Upgrade to Pro",
      icon: <Crown className="w-7 h-7 text-rose-600" />,
      highlightColor: "border-rose-500 shadow-2xl shadow-rose-200",
      background: "bg-gradient-to-br from-rose-50 to-white",
      subtext: "Best value for growing businesses",
    },
    {
      name: "Enterprise",
      price: "Custom",
      messageLimit: "Custom",
      features: [
        "Unlimited automated messages",
        "Enterprise-grade AI customization",
        "Dedicated account manager",
        "Advanced security and compliance",
        "24/7 premium support",
        "Custom integration support",
      ],
      mostPopular: false,
      buttonText: "Talk to Sales",
      icon: <ShieldCheck className="w-7 h-7 text-rose-700" />,
      highlightColor: "border-gray-200 hover:border-rose-400",
      background: "bg-white hover:bg-rose-50/30",
      subtext: "Tailored solutions for large organizations",
    },
  ];

  const AnnualSavingsBadge = () => (
    <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
      Save 17% Annually
    </div>
  );

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Pricing that Grows with You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible, transparent pricing designed to support your business at
            every stage, from startup to enterprise.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center mt-8 mb-12">
            <div className="bg-gray-100 rounded-full p-1 flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-rose-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 relative ${
                  billingCycle === "annual"
                    ? "bg-rose-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`
                border-2 rounded-3xl p-7 flex flex-col relative overflow-hidden
                transition-all duration-300 group
                ${plan.highlightColor}
                ${plan.background}
                ${
                  plan.mostPopular
                    ? "scale-105 md:scale-110 z-10"
                    : "md:scale-100"
                }
              `}
            >
              {billingCycle === "annual" && plan.price !== "Custom" && (
                <AnnualSavingsBadge />
              )}

              <div className="flex items-center mb-5">
                {plan.icon}
                <h2 className="ml-3 text-2xl font-bold text-gray-900">
                  {plan.name}
                </h2>
              </div>

              <p className="text-gray-600 mb-6 h-12">{plan.subtext}</p>

              <div className="mb-8">
                <p className="text-5xl font-extrabold text-gray-900 mb-2">
                  {plan.price === "0"
                    ? "Free"
                    : plan.price === "Custom"
                    ? plan.price
                    : `$${plan.price}`}
                  {plan.price !== "Custom" && billingCycle === "monthly" && (
                    <span className="text-base">/mo</span>
                  )}
                </p>
                {plan.price !== "Custom" && billingCycle === "annual" && (
                  <p className="text-green-600 font-semibold">
                    ${Math.round(Number(plan.price) * 10)} billed annually
                  </p>
                )}
                <p className="text-gray-500">
                  {plan.messageLimit} automated messages
                </p>
              </div>

              <ul className="mb-8 space-y-4 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-3.5 rounded-lg font-bold group-hover:translate-x-1 
                  transition-all duration-300 flex items-center justify-center space-x-2
                  ${
                    plan.mostPopular
                      ? "bg-rose-500 text-white hover:bg-rose-600"
                      : "bg-rose-50 text-rose-700 hover:bg-rose-100"
                  }
                `}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 mr-2 text-rose-500" />
            Transparent pricing with no hidden fees. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
