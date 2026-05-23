"use client";

import { motion } from "framer-motion";
import { MotionDiv, MotionP, MotionH1, MotionH2, MotionH3, MotionHeader } from "@/components/ui/motion";
import { Sparkles, Newspaper, Glasses, ActivitySquare, MessageSquare } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const aiFeatures = [
  {
    id: "smart-alerts",
    title: "Smart Alerts",
    description: "AI-driven notifications for unusual options activity and key resistance levels. Never miss a breakout.",
    icon: Sparkles,
    colSpan: "md:col-span-2 md:row-span-1",
    delay: 0,
    content: (
      <div className="relative w-full h-48 sm:h-64 mt-6 rounded-2xl overflow-hidden border border-white/5 bg-[#1A1A2E]/50 flex flex-col justify-center items-center">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B4EFF]/20 to-transparent opacity-50 blur-xl" />
        
        {/* Mock Notification */}
        <MotionDiv 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 w-11/12 max-w-sm rounded-xl bg-[#13131A] border border-[#6B4EFF]/50 shadow-[0_0_30px_rgba(107,78,255,0.2)] p-4 flex gap-4 items-start"
        >
          <div className="mt-1 bg-[#6B4EFF]/20 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-[#6B4EFF]" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-white">AAPL Alert</span>
              <span className="text-xs text-[#6B4EFF] font-medium bg-[#6B4EFF]/10 px-2 py-0.5 rounded-full">AI Detected</span>
            </div>
            <p className="text-sm text-zinc-300 leading-snug">
              AAPL approaching key resistance at <span className="text-white font-medium">$187.40</span> — unusual options activity detected.
            </p>
          </div>
        </MotionDiv>
      </div>
    ),
  },
  {
    id: "news-summary",
    title: "AI News Summary",
    description: "Instant tl;dr of financial reports, earnings calls, and global market news.",
    icon: Newspaper,
    colSpan: "md:col-span-1 md:row-span-1",
    delay: 0.08,
  },
  {
    id: "watchlist",
    title: "Watchlist Context",
    description: "Your watchlist, enriched with AI sentiment scores and macroeconomic impact analysis.",
    icon: Glasses,
    colSpan: "md:col-span-1",
    delay: 0.16,
    content: (
      <div className="relative w-full h-48 mt-6 rounded-2xl overflow-hidden border border-white/5">
        <Image src="/Watchlist.png" alt="Watchlist Summary" fill className="object-cover object-top opacity-80" />
      </div>
    ),
  },
  {
    id: "stock-analysis",
    title: "Deep Analysis",
    description: "Technical and fundamental analysis synthesized into actionable insights in seconds.",
    icon: ActivitySquare,
    colSpan: "md:col-span-1",
    delay: 0.24,
  },
  {
    id: "ai-chat",
    title: "Financial AI Chat",
    description: "Ask complex questions about your portfolio, historical trends, or future projections.",
    icon: MessageSquare,
    colSpan: "md:col-span-1",
    delay: 0.32,
  },
];

export function AiPremium() {
  return (
    <section className="relative w-full bg-[#050508] py-24 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Background glow for the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#6B4EFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div id="ai-premium" className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-[#6B4EFF]/10 border border-[#6B4EFF]/30 px-4 py-1.5 rounded-full mb-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#6B4EFF]/20 animate-pulse" />
            <Sparkles className="w-4 h-4 text-[#6B4EFF] relative z-10" />
            <span className="text-xs font-bold tracking-widest text-[#6B4EFF] uppercase relative z-10">Premium</span>
          </MotionDiv>
          
          <MotionH2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 font-display"
          >
            AI-Powered Premium
          </MotionH2>
          <MotionP 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Elevate your trading edge. Get instant AI insights, real-time alerts, and deep macroeconomic context right when you need it.
          </MotionP>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
          {aiFeatures.map((feature) => (
            <MotionDiv
              key={feature.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: feature.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative rounded-[2rem] border border-white/5 bg-[#13131A] overflow-hidden flex flex-col p-8 transition-colors hover:border-white/10",
                feature.colSpan
              )}
            >
              {/* Internal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A2E]/40 pointer-events-none" />
              
              <div className="relative z-10 flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-[#6B4EFF] transition-colors">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400 max-w-md">
                    {feature.description}
                  </p>
                </div>
                {feature.content && (
                  <div className="mt-auto">
                    {feature.content}
                  </div>
                )}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
