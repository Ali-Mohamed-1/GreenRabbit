"use client";
import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { TrendingUp, TrendingDown } from "lucide-react";

export function Ticker() {
  const tickers = [
    { symbol: "AAPL", change: "+1.24%", isUp: true },
    { symbol: "TSLA", change: "-0.83%", isUp: false },
    { symbol: "AMZN", change: "+2.10%", isUp: true },
    { symbol: "NVDA", change: "+3.41%", isUp: true },
    { symbol: "MSFT", change: "-0.22%", isUp: false },
    { symbol: "GOOGL", change: "+0.97%", isUp: true },
    { symbol: "META", change: "+1.55%", isUp: true },
    { symbol: "BRK.B", change: "-0.14%", isUp: false },
    { symbol: "JPM", change: "+0.61%", isUp: true },
    { symbol: "GLD", change: "-0.38%", isUp: false },
  ];

  return (
    <div className="relative w-full border-y border-[#1c1c24] bg-card/25 py-3.5 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 flex items-center gap-4">
        {/* Left Tag */}
        <div className="flex shrink-0 items-center gap-1.5 rounded bg-accent/10 px-2 py-1 border border-accent/20">
          <span className="text-[10px] font-extrabold tracking-widest text-accent uppercase">Live Feed</span>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
          </span>
        </div>

        {/* Vertical divider */}
        <div className="h-4 w-[1px] bg-[#2c2c35]" />

        {/* Marquee Strip */}
        <div className="flex-1 overflow-hidden">
          <Marquee className="py-0.5" pauseOnHover>
            {tickers.map((ticker, index) => (
              <div
                key={`${ticker.symbol}-${index}`}
                className="flex items-center gap-2 px-6 font-mono text-sm"
              >
                <span className="font-extrabold text-text">{ticker.symbol}</span>
                <span
                  className={`flex items-center gap-0.5 font-bold ${
                    ticker.isUp ? "text-green" : "text-red"
                  }`}
                >
                  {ticker.isUp ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {ticker.change}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
