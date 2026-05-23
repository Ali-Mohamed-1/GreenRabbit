"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MotionDiv, MotionP, MotionH1, MotionH2, MotionH3, MotionHeader } from "@/components/ui/motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const ctaBackgroundGlow = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(120px circle at ${x}px ${y}px, rgba(107, 78, 255, 0.45), transparent 80%)`
  );

  const links = [
    { name: "Features", href: "#features" },
    { name: "Premium", href: "#pricing" },
    { name: "Download", href: "#download" },
  ];

  return (
    <MotionHeader
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-[#1c1c24] bg-bg/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-7 w-7 overflow-hidden rounded-md border border-[#2c2c35] bg-card p-0.5 transition-colors group-hover:border-accent">
            <Image
              src="/logo.png"
              alt="Green Rabbit Logo"
              width={28}
              height={28}
              className="h-full w-full object-contain"
              priority
            />
          </div>
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

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <MotionDiv
            className="group relative overflow-hidden rounded-lg border border-[#2c2c35] bg-card p-[1px] transition-colors hover:border-accent"
            onMouseMove={handleMouseMove}
          >
            {/* Motion Glow Effect */}
            <MotionDiv
              className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: ctaBackgroundGlow }}
            />
            
            <Link
              href="#get-started"
              className="relative flex items-center gap-1.5 rounded-lg bg-bg px-4 py-2 text-sm font-semibold text-text shadow-lg shadow-black/40 hover:bg-accent/10 transition-colors"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </MotionDiv>
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
          <div className="flex flex-col gap-4 px-6 py-6">
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
            <Link
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-bold text-white shadow-lg transition-colors hover:bg-accent/90"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </MotionDiv>
      )}
    </MotionHeader>
  );
}
