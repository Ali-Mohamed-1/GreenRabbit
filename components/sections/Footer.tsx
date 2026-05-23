import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Apple, Play } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050508] pt-16 pb-8 text-sm text-zinc-400">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-md border border-[#2c2c35] bg-card p-0.5 transition-colors group-hover:border-accent">
                <Image
                  src="/logo.png"
                  alt="Green Rabbit Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white transition-colors group-hover:text-accent uppercase">
                Green Rabbit
              </span>
            </Link>
            <p className="max-w-xs mb-8">
              Your market, always in focus. The next-gen AI stock terminal bridging raw financial data with gorgeous design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#download" className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 hover:bg-white/10 transition-colors">
                <Apple className="w-5 h-5 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none text-zinc-400">Download on the</span>
                  <span className="text-sm font-semibold leading-tight text-white">App Store</span>
                </div>
              </Link>
              <Link href="#download" className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 hover:bg-white/10 transition-colors">
                <Play className="w-5 h-5 text-white" fill="currentColor" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none text-zinc-400">GET IT ON</span>
                  <span className="text-sm font-semibold leading-tight text-white">Google Play</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Premium</Link></li>
              <li><Link href="#download" className="hover:text-white transition-colors">Download</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p>© 2025 Green Rabbit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
