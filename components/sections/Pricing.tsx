"use client";

import { useState } from "react";
import { MotionDiv, MotionP, MotionH1, MotionH2, MotionH3, MotionHeader } from "@/components/ui/motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  // Classic Monthly is $8.99.
  // Classic Yearly at 20% off: $8.99 * 12 * 0.8 = $86.30 (approx $7.19/month, saving $21.58/year)
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      subtext: "Essential tools to get started in the market.",
      features: [
        "Real-time stock prices",
        "Basic watchlist tracking",
        "Standard charting tools",
        "Market news feed",
      ],
      isPremium: false,
      buttonText: "Get Started",
      buttonStyle: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
      icon: (
        <svg className="w-8 h-8 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      name: "Classic",
      price: billingPeriod === "monthly" ? "$8.99" : "$86.30",
      period: billingPeriod === "monthly" ? "/monthly" : "/Yearly",
      subtext: billingPeriod === "monthly" 
        ? "Essential AI tools to level up your market tracking." 
        : "Only $7.19/month · Save $21.58/year",
      features: [
        "Remove Ads",
        "Limited AI access free for 7 day",
        "AI Chatbot (5 Free Credits)",
        "AI News Summarization for 7 day",
      ],
      isPremium: false,
      buttonText: "Upgrade To Classic",
      buttonStyle: "bg-transparent text-white border border-[#FFD700]/30 hover:border-[#FFD700]/60 hover:bg-white/[0.02]",
      icon: (
        <svg className="w-8 h-8 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      name: "Pro Plan",
      price: billingPeriod === "monthly" ? "$14.99" : "$99.99",
      period: billingPeriod === "monthly" ? "/monthly" : "/Yearly",
      subtext: billingPeriod === "monthly"
        ? "Only $8.33/month · Save $55.89/year"
        : "Only $8.33/month · Save $55.89/year",
      features: [
        "Priority customer support",
        "Real-time AI trading signals",
        "Custom alerts & notifications",
        "API access for automation",
        "Expert community access",
        "Unlimited watchlists",
        "Advanced charting tools",
        "Advanced portfolio tracking",
      ],
      isPremium: true,
      buttonText: "Upgrade To Pro",
      buttonStyle: "bg-gradient-to-r from-[#FFB800] to-[#FFD700] text-black hover:opacity-90 shadow-[0_4px_20px_0_rgba(255,215,0,0.3)]",
      badge: "Best Value"
    }
  ];

  return (
    <section id="pricing" className="relative w-full bg-[#0A0A0C] py-24 sm:py-32 scroll-mt-24">
      {/* Visual separation mask */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <MotionH2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 font-display"
          >
            Simple Pricing
          </MotionH2>
          <MotionP 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-xl mx-auto"
          >
            Start for free, upgrade to Classic or Pro when you need the competitive edge.
          </MotionP>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16 relative">
          <div className="relative inline-flex items-center gap-1 bg-[#13131A] p-1.5 rounded-full border border-white/5 shadow-2xl">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                billingPeriod === "monthly" 
                  ? "bg-white/10 text-white shadow-lg" 
                  : "text-zinc-400 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                billingPeriod === "yearly" 
                  ? "bg-white/10 text-white shadow-lg" 
                  : "text-zinc-400 hover:text-white"
              )}
            >
              Yearly
            </button>
            
            {/* Save 20% Badge */}
            <span className="absolute -top-3.5 -right-3.5 bg-[#FFD700] text-black text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)] tracking-wide animate-pulse">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <MotionDiv
              key={plan.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "relative rounded-[2rem] p-8 sm:p-10 flex flex-col overflow-hidden transition-all duration-300",
                plan.isPremium 
                  ? "border border-[#FFD700] shadow-[0_0_40px_rgba(255,215,0,0.1)] ring-1 ring-[#FFD700]/30 bg-[#13131A]/90" 
                  : "border border-white/10 bg-[#13131A] hover:border-white/20"
              )}
            >
              {plan.isPremium && (
                <>
                  <style jsx>{`
                    @keyframes gradientShift {
                      0% { background: rgba(255, 215, 0, 0.03); }
                      50% { background: rgba(255, 215, 0, 0.08); }
                      100% { background: rgba(255, 215, 0, 0.03); }
                    }
                    .premium-bg {
                      animation: gradientShift 6s ease-in-out infinite;
                    }
                  `}</style>
                  <div className="absolute inset-0 premium-bg pointer-events-none" />
                  {plan.badge && (
                    <div className="absolute top-8 right-8">
                      <span className="bg-[#FFD700] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                </>
              )}
              
              <div className="relative z-10 mb-6 flex items-center gap-3">
                {plan.icon}
                <h3 className="text-2xl font-medium text-white">{plan.name}</h3>
              </div>

              <div className="relative z-10 flex flex-col gap-1 mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-[#FFD700]">{plan.price}</span>
                  {plan.period && <span className="text-zinc-400 text-sm font-medium">{plan.period}</span>}
                </div>
                <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed font-mono tracking-tight min-h-[16px]">
                  {plan.subtext}
                </p>
              </div>

              <ul className="relative z-10 space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <Check className={cn("w-5 h-5 shrink-0 mt-0.5", plan.isPremium ? "text-[#FFD700]" : "text-zinc-500")} />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </div>

        {/* Global Footer Subtext */}
        <div className="flex justify-center gap-8 mt-12 text-zinc-500 text-xs font-medium tracking-wide">
          <span>Cancel anytime</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700 self-center" />
          <span>Secure payment</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700 self-center" />
          <span>Instant access</span>
        </div>
      </div>
    </section>
  );
}
