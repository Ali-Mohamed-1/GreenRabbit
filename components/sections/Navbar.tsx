"use client";
import React, { useState } from "react";
import { MotionDiv, MotionP, MotionH1, MotionH2, MotionH3, MotionHeader } from "@/components/ui/motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Apple, Play } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <MotionHeader
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-[#1c1c24] bg-bg/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo & Wordmark (Bigger Logo, no container) */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Green Rabbit Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="font-serif text-lg font-bold tracking-wider text-text transition-colors group-hover:text-accent uppercase">
            Green Rabbit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-muted transition-colors hover:text-text py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Store Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="#download" 
            className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3.5 py-1.5 hover:bg-white/10 transition-colors"
          >
            <Apple className="w-4 h-4 text-white" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[8px] text-zinc-400">Download on the</span>
              <span className="text-xs font-semibold text-white">App Store</span>
            </div>
          </Link>
          <Link 
            href="#download" 
            className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3.5 py-1.5 hover:bg-white/10 transition-colors"
          >
            <Play className="w-4 h-4 text-white" fill="currentColor" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[8px] text-zinc-400">GET IT ON</span>
              <span className="text-xs font-semibold text-white">Google Play</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex p-2 text-muted hover:text-text md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-[#1c1c24] bg-bg/95 md:hidden"
        >
          <div className="flex flex-col gap-5 px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-muted hover:text-text transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link 
                href="#download" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 hover:bg-white/10 transition-colors"
              >
                <Apple className="w-5 h-5 text-white" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] text-zinc-400">Download on the</span>
                  <span className="text-sm font-semibold text-white">App Store</span>
                </div>
              </Link>
              <Link 
                href="#download" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 hover:bg-white/10 transition-colors"
              >
                <Play className="w-5 h-5 text-white" fill="currentColor" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] text-zinc-400">GET IT ON</span>
                  <span className="text-sm font-semibold text-white">Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </MotionDiv>
      )}
    </MotionHeader>
  );
}
