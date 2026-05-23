"use client";

import { useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { MotionDiv, MotionP, MotionH2 } from "@/components/ui/motion";
import { Activity, CandlestickChart, Globe, LineChart, Calendar, TrendingUp, Coins } from "lucide-react";
import { memo } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Live Stock Prices",
    description: "Real-time market data across 10,000+ equities. Never miss a trade with sub-millisecond updates.",
    icon: Activity,
  },
  {
    title: "Funds & ETFs",
    description: "Curated baskets for passive and active investors. Analyze and track top performing ETFs in one click.",
    icon: CandlestickChart,
  },
  {
    title: "Forex Markets",
    description: "24/5 currency trading with ultra-tight spreads. Deep liquidity pools direct from top-tier institutions.",
    icon: Globe,
  },
  { 
    title: "Technical Analysis", 
    description: "Access real-time technical indicators, oscillators, and key moving averages directly on the chart.",
    icon: LineChart
  },
  { 
    title: "Earnings Calendar", 
    description: "Track corporate reporting dates, consensus EPS estimates, and actual results.",
    icon: Calendar
  },
  { 
    title: "IPO Calendar", 
    description: "Monitor upcoming public listings, initial pricing ranges, and market debuts.",
    icon: TrendingUp
  },
  { 
    title: "Dividends", 
    description: "Stay updated on ex-dividend dates, payout schedules, yields, and historical payout rates.",
    icon: Coins
  }
];

const FeatureCard = memo(({ feature, index }: { feature: typeof features[0], index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <MotionDiv
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-3xl border border-white/10 bg-[#13131A] p-8 overflow-hidden will-change-transform flex flex-col justify-between transition-colors hover:border-white/20",
        // Desktop (lg): first 4 items are col-span-3, last 3 items are col-span-4 to fit perfectly into 2 rows of 12 columns
        index < 4 ? "col-span-12 sm:col-span-6 lg:col-span-3" : "col-span-12 sm:col-span-6 lg:col-span-4",
        // Tablet (sm): make the odd 7th item span full 12 columns for a balanced tablet grid
        index === 6 && "sm:col-span-12 lg:col-span-4"
      )}
    >
      <MotionDiv
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(107, 78, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#6B4EFF]">
          <feature.icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            {feature.description}
          </p>
        </div>
      </div>
    </MotionDiv>
  );
});
FeatureCard.displayName = "FeatureCard";

export function Features() {
  return (
    <section className="relative w-full bg-[#0A0A0C] py-24 sm:py-32 flex flex-col items-center">
      {/* Visual separation mask at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent opacity-50 pointer-events-none" />

      <div id="features" className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 sm:mb-24">
          <MotionH2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 font-display"
          >
            What You Get
          </MotionH2>
          <MotionP 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            A powerful suite of tools designed for serious traders. Experience the market with clarity and precision.
          </MotionP>
        </div>

        {/* 12-Column Cohesive organic grid layout that aligns perfectly in exactly 2 rows on desktop */}
        <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto items-stretch">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
