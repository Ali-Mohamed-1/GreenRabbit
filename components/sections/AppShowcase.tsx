"use client";

import { MotionDiv, MotionH3 } from "@/components/ui/motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { memo } from "react";

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

export function AppShowcase() {
  return (
    <section className="relative w-full bg-[#0A0A0C] py-24 flex flex-col items-center overflow-hidden">
        {/* App in Action Showcase */}
        <div className="flex flex-col items-center w-full max-w-7xl px-4 md:px-8">
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
        <div className="mt-32 flex flex-col items-center w-full max-w-7xl">
          <MotionH3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-12"
          >
            Beyond Prices
          </MotionH3>
          <div className="w-full flex overflow-x-auto pb-8 snap-x snap-mandatory gap-6 px-4 md:px-8 md:justify-center" style={{ scrollbarWidth: "none" }}>
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
    </section>
  );
}
