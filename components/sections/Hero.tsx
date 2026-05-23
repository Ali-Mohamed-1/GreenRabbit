"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MotionDiv, MotionP, MotionH1, MotionH2, MotionH3, MotionHeader } from "@/components/ui/motion";
import { ArrowDown, Smartphone, ShieldCheck, Zap, Sparkles, TrendingUp, TrendingDown } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Extracted mock phone component to isolate animations for React.memo
const PhoneMockup = React.memo(() => {
  const stocks = [
    { name: "Apple Inc.", symbol: "AAPL", price: "189.84", change: "+1.24%", isUp: true, sparkline: [40, 45, 42, 48, 52, 50, 55] },
    { name: "Tesla Inc.", symbol: "TSLA", price: "174.60", change: "-0.83%", isUp: false, sparkline: [60, 58, 52, 55, 50, 48, 46] },
    { name: "Nvidia Corp.", symbol: "NVDA", price: "940.22", change: "+3.41%", isUp: true, sparkline: [30, 42, 55, 62, 70, 85, 95] },
    { name: "Amazon.com", symbol: "AMZN", price: "180.12", change: "+2.10%", isUp: true, sparkline: [45, 48, 47, 50, 52, 55, 58] },
  ];

  return (
    <div className="relative mx-auto h-[580px] w-[270px] rounded-[44px] border-4 border-[#2c2c35] bg-bg p-3 shadow-2xl shadow-accent/10">
      {/* Dynamic Notch */}
      <div className="absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-black flex items-center justify-between px-4">
        <div className="h-1 w-1 rounded-full bg-neutral-800" />
        <div className="h-1.5 w-6 rounded-full bg-neutral-900" />
      </div>

      {/* Screen Container */}
      <div className="h-full w-full overflow-hidden rounded-[34px] bg-bg p-3 pt-6 flex flex-col justify-between">
        
        {/* Mock App Header */}
        <div>
          <div className="flex items-center justify-between border-b border-[#1c1c24] pb-2.5">
            <span className="font-serif text-xs font-bold tracking-wider text-text uppercase">GREEN RABBIT</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20">
              <Sparkles className="h-2 w-2 text-accent" />
            </div>
          </div>

          {/* AI WATCHLIST SUMMARY Banner */}
          <div className="mt-3 rounded-lg border border-accent/20 bg-accent/5 p-2 backdrop-blur-md">
            <div className="flex items-center gap-1">
              <Sparkles className="h-2.5 w-2.5 text-accent animate-pulse" />
              <span className="text-[9px] font-extrabold tracking-widest text-accent uppercase">AI Watchlist Summary</span>
            </div>
            <p className="mt-0.5 text-[8px] leading-relaxed text-muted">
              Tech stocks are leading the rally with NVDA surging <span className="text-green">+3.4%</span> on massive volume. Recommended: hold positions.
            </p>
          </div>

          {/* Stock List Title */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider">My Watchlist</span>
            <span className="text-[8px] font-medium text-accent">Real-time</span>
          </div>

          {/* Stock List Rows */}
          <div className="mt-2.5 space-y-2">
            {stocks.map((stock) => (
              <div
                key={stock.symbol}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-card/40 p-2 backdrop-blur-md transition-all hover:bg-card/70"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black text-text">{stock.symbol}</span>
                    <span className="text-[8px] text-muted truncate max-w-[70px]">{stock.name}</span>
                  </div>
                  <span className="text-[11px] font-bold tracking-tight text-text">${stock.price}</span>
                </div>

                {/* SVG Mini Sparkline */}
                <div className="h-6 w-14">
                  <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d={stock.sparkline.reduce((acc, val, i) => `${acc} ${i === 0 ? "M" : "L"} ${i * (100 / 6)} ${100 - val}`, "")}
                      fill="none"
                      stroke={stock.isUp ? "#22C55E" : "#EF4444"}
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Price Delta Badge */}
                <div className={`flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[9px] font-bold ${
                  stock.isUp ? "bg-green/10 text-green" : "bg-red/10 text-red"
                }`}>
                  {stock.isUp ? <TrendingUp className="h-2 w-2" /> : <TrendingDown className="h-2 w-2" />}
                  {stock.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Tab Bar */}
        <div className="mt-auto border-t border-[#1c1c24] pt-2.5 flex items-center justify-around text-muted">
          <span className="text-[8px] font-bold text-accent">Market</span>
          <span className="text-[8px] font-medium">Chart</span>
          <span className="text-[8px] font-medium">AI Chat</span>
          <span className="text-[8px] font-medium">Watchlist</span>
        </div>

      </div>
    </div>
  );
});
PhoneMockup.displayName = "PhoneMockup";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const ctaBackgroundGlow = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(150px circle at ${x}px ${y}px, rgba(107, 78, 255, 0.35), transparent 80%)`
  );

  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-bg py-20 px-6">
      {/* Manually Copied Background Beams */}
      <BackgroundBeams />

      {/* Hero Outer Grid Container */}
      <div className="relative z-10 mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 md:grid-cols-12">
        
        {/* Left Side: Headline & CTAs */}
        <div className="md:col-span-7 flex flex-col justify-center text-left">
          
          {/* Tag */}
          <MotionDiv
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              Next-Gen AI Stock Terminal
            </span>
          </MotionDiv>

          {/* Headline - Serif Display font */}
          <MotionH1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-serif text-4xl font-extrabold leading-tight tracking-wider text-text sm:text-5xl md:text-6xl uppercase"
          >
            Real-time Prices.<br />
            <span className="text-accent">AI-Powered</span> Intel.
          </MotionH1>

          {/* Subheadline - Clean Sans font */}
          <MotionP
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Green Rabbit bridges the gap between raw financial terminals and gorgeous consumer apps. Track global stocks, funds, and forex with real-time accuracy and smart AI alerting.
          </MotionP>

          {/* CTA Buttons */}
          <MotionDiv
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Download Button with Hover Motion Glow */}
            <MotionDiv
              className="group relative w-full sm:w-auto overflow-hidden rounded-xl border border-[#2c2c35] bg-card p-[1px] transition-colors hover:border-accent"
              onMouseMove={handleMouseMove}
            >
              <MotionDiv
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: ctaBackgroundGlow }}
              />
              <Link
                href="#download"
                className="relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-center text-sm font-bold text-white shadow-xl transition-transform active:scale-98"
              >
                Download Free
                <ArrowDown className="h-4 w-4" />
              </Link>
            </MotionDiv>

            {/* Ghost See Premium Features */}
            <Link
              href="#pricing"
              className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl border border-[#2c2c35] bg-card/30 backdrop-blur-md px-8 py-3.5 text-center text-sm font-bold text-text transition-colors hover:bg-card/60 active:scale-98"
            >
              See Premium Features
            </Link>
          </MotionDiv>

        </div>

        {/* Right Side: Aspect-[9/19.5] Phone Mockup */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="md:col-span-5 flex justify-center"
        >
          <PhoneMockup />
        </MotionDiv>

      </div>
    </section>
  );
}
