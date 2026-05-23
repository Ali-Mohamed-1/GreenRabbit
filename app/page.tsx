/**
 * Green Rabbit App Landing Page
 * 
 * IMPECCABLE /frontend-design locked design direction:
 * "Dark Mode (OLED) & Real-Time Monitoring Alert System"
 * - Base backdrop: OLED Deep Black #0D0D0F with card overlays #13131A
 * - High-leverage visual variance: Purple #6B4EFF accents and responsive real-time indicators
 * 
 * 6-Line Design Plan:
 * 1. Typography Selection: Serif Display heading (Playfair Display SC) paired with clean geometric Sans body (Karla).
 * 2. Hero Section Layout: Split layout featuring left-aligned content and an aspect-[9/19.5] phone mockup on the right.
 * 3. Background Component: Manually-copied Aceternity UI BackgroundBeams creating smooth laser glow curves.
 * 4. Micro-Animations: Navbar slides from y: -20, opacity: 0 over 400ms. Hero staggers: tag -> heading -> subhead -> CTAs -> mockup (150ms step).
 * 5. Hover Motion System: Zero re-render hover glow effect on CTA buttons powered by Framer Motion's useMotionValue & useTransform.
 * 6. Mobile Layout Strategy: Stack mockups below CTAs (< 768px), scale headline to 32px, and maintain min-h-[100dvh] layout bounds.
 */

import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Features } from "@/components/sections/Features";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-bg text-text">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Features />
      </main>
    </div>
  );
}
