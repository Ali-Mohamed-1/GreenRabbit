"use client";

import { motion } from "framer-motion";
import { MotionDiv, MotionP, MotionH1, MotionH2, MotionH3, MotionHeader } from "@/components/ui/motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Essential tools to get started in the market.",
    features: ["Real-time prices", "Watchlist", "Basic News", "Standard Alerts"],
    isPremium: false,
  },
  {
    name: "Premium",
    price: "$29",
    period: "/mo",
    description: "The complete AI-powered trading terminal.",
    features: [
      "Everything in Free",
      "Smart Alerts (Unusual Activity)",
      "AI News Summary",
      "Watchlist Summary Context",
      "Deep Stock Analysis",
      "Financial AI Chat",
    ],
    isPremium: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#0A0A0C] py-24 sm:py-32 scroll-mt-24">
      {/* Visual separation mask */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16 sm:mb-24">
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
            Start for free, upgrade when you need the edge.
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <MotionDiv
              key={plan.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "relative rounded-[2rem] p-8 sm:p-10 flex flex-col overflow-hidden",
                plan.isPremium 
                  ? "border border-[#6B4EFF] shadow-[0_0_40px_rgba(107,78,255,0.15)] ring-1 ring-[#6B4EFF]/50" 
                  : "border border-white/10 bg-[#13131A]"
              )}
            >
              {plan.isPremium && (
                <>
                  <style jsx>{`
                    @keyframes gradientShift {
                      0% { background: rgba(107, 78, 255, 0.13); }
                      50% { background: rgba(107, 78, 255, 0.27); }
                      100% { background: rgba(107, 78, 255, 0.13); }
                    }
                    .premium-bg {
                      animation: gradientShift 6s ease-in-out infinite;
                    }
                  `}</style>
                  <div className="absolute inset-0 premium-bg pointer-events-none" />
                  <div className="absolute top-0 right-8 transform -translate-y-1/2">
                    <span className="bg-[#6B4EFF] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                </>
              )}
              
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-medium text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="relative z-10 flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight text-white">{plan.price}</span>
                {plan.period && <span className="text-zinc-400 font-medium">{plan.period}</span>}
              </div>

              <ul className="relative z-10 space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <Check className={cn("w-5 h-5 shrink-0", plan.isPremium ? "text-[#6B4EFF]" : "text-zinc-500")} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "relative z-10 w-full py-4 rounded-xl font-medium transition-all duration-200 active:scale-[0.98]",
                plan.isPremium 
                  ? "bg-[#6B4EFF] text-white hover:bg-[#7b61ff] shadow-[0_4px_14px_0_rgba(107,78,255,0.39)]" 
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              )}>
                {plan.isPremium ? "Get Premium" : "Get Started"}
              </button>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
