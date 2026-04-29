"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="relative w-full min-h-screen flex items-center justify-center pt-28">
        <Image
          src="/images/Under construction-bro.svg"
          alt="Page not found"
          fill
          priority
          className="object-cover pb-16"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/85" />

        <div className="relative z-10 w-full max-w-4xl px-6 text-center space-y-6">
          <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Work in progress
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            This page is <span className="text-gradient-gold">under construction.</span>
          </h1>

          <p className="text-sm md:text-base text-foreground/60 max-w-2xl mx-auto">
            We&apos;re crafting something special here. In the meantime, you can explore our other pages or get in touch with our team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <Link href="/">
              <Button className="bg-gold text-black font-semibold rounded-full px-8 h-11 shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all">
                <Ripple />
                Back to Home
              </Button>
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/70 hover:text-gold transition-colors"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
