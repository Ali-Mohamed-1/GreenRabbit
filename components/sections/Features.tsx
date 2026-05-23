"use client";

import { useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { MotionDiv, MotionP, MotionH1, MotionH2, MotionH3, MotionHeader } from "@/components/ui/motion";
import { Activity, CandlestickChart, Globe } from "lucide-react";
import Image from "next/image";
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
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-white/10 bg-[#13131A] p-8 overflow-hidden will-change-transform"
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
        <h3 className="text-xl font-medium text-white">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {feature.description}
        </p>
      </div>
    </MotionDiv>
  );
});
FeatureCard.displayName = "FeatureCard";

const PhoneMockup = memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <div className={cn("relative aspect-[9/19.5] w-full max-w-[280px] rounded-[2.5rem] border border-white/10 bg-black shadow-2xl overflow-hidden will-change-transform", className)}>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none z-10" />
      {/* Top Notch */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
        <div className="w-1/3 h-full bg-black rounded-b-xl" />
      </div>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover"
        sizes="(max-w-768px) 100vw, 33vw"
      />
    </div>
  );
});
PhoneMockup.displayName = "PhoneMockup";

export function Features() {
  return (
    <section className="relative w-full bg-[#0A0A0C] py-24 sm:py-32 flex flex-col items-center">
      {/* Visual separation mask at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent opacity-50 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 sm:mb-24">
          <MotionH2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 font-display"
          >
            What You Get
          </MotionH2>
          <MotionP 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            A powerful suite of tools designed for serious traders. Experience the market with clarity and precision.
          </MotionP>
        </div>

        {/* 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} index={idx} />
          ))}
        </div>

        {/* App in Action Showcase */}
        <div className="flex flex-col items-center">
          <MotionH3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-16"
          >
            App in Action
          </MotionH3>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 overflow-visible">
            <MotionDiv
              initial={{ y: 40, opacity: 0, rotate: -4 }}
              whileInView={{ y: 0, opacity: 1, rotate: -4 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="z-0 sm:translate-y-8"
            >
              <PhoneMockup src="/Watchlist.png" alt="Watchlist view" />
            </MotionDiv>
            
            <MotionDiv
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="z-10"
            >
              <PhoneMockup src="/Stock Overview  Det.png" alt="Market view" className="scale-105" />
            </MotionDiv>
            
            <MotionDiv
              initial={{ y: 40, opacity: 0, rotate: 4 }}
              whileInView={{ y: 0, opacity: 1, rotate: 4 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="z-0 sm:translate-y-8"
            >
              <PhoneMockup src="/Chart tab Horz.png" alt="Chart view" />
            </MotionDiv>
          </div>
        </div>

        {/* Beyond Prices Strip */}
        <div className="mt-32 flex flex-col items-center w-full">
          <MotionH3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-12"
          >
            Beyond Prices
          </MotionH3>
          <div className="w-full flex overflow-x-auto pb-8 snap-x snap-mandatory gap-6 px-4 md:px-0 md:justify-center" style={{ scrollbarWidth: "none" }}>
            {[
              { title: "Technical Analysis", src: "/Technical tab.png" },
              { title: "Earnings Calendar", src: "/Earnings Calendar This Week.png" },
              { title: "IPO Calendar", src: "/IPO Calendar Upcoming.png" },
              { title: "Dividends", src: "/Technical tab Dividends.png" }
            ].map((item, idx) => (
              <MotionDiv 
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-shrink-0 w-64 snap-center group"
              >
                <div className="relative aspect-[4/5] rounded-2xl border border-white/10 bg-[#13131A] overflow-hidden mb-4">
                  <Image src={item.src} alt={item.title} fill className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>
                <h4 className="text-center text-sm font-medium text-zinc-300">{item.title}</h4>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
