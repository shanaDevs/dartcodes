"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube, Star } from "lucide-react";
import { useState } from "react";
import { Zap } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Expertise", href: "#" },
      { name: "Industries", href: "#" },
      { name: "Our Work", href: "#" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Enterprise Solutions", href: "#" },
      { name: "Cloud & DevOps", href: "#" },
      { name: "Database Engineering", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "Email", href: "hello@dartcodes.com" },
      { name: "Phone", href: "(+94) 77 123 4567" },
      { name: "Address", href: "Colombo, Sri Lanka" },
    ],
  },
];

const socialIcons = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative w-full mt-auto">
      <div className="relative w-full rounded-t-[1.8rem] md:rounded-t-[2.5rem] overflow-hidden bg-background border-t border-border/60 shadow-[0_18px_70px_rgba(15,23,42,0.18)] dark:shadow-[0_0_90px_rgba(0,0,0,0.55)]">
        {/* Theme-aware premium gradients + soft gold tint */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-white to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-black" />
        <div className="absolute inset-0 opacity-70 dark:opacity-80 bg-[radial-gradient(circle_at_15%_0%,rgba(212,175,55,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(212,175,55,0.10),transparent_60%)]" />
        <div className="absolute inset-0 ring-1 ring-inset ring-gold/10 dark:ring-gold/15 pointer-events-none" />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-70" />

        <div className="relative z-10 px-5 sm:px-6 md:px-12 lg:px-16 py-10 md:py-16">

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* BRAND */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold p-1 rounded-sm text-black">
                <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-foreground">DART<span className="text-gold">CODES</span></span>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-sm mb-6">
                Engineering high-performance digital products designed to perform, built to grow, and ready for the future.
              </p>

              <div className="flex gap-3">
                {socialIcons.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-9 h-9 rounded-full bg-foreground/[0.03] border border-border/60 flex items-center justify-center text-foreground/60 hover:text-gold hover:border-gold/30 hover:bg-gold/10 transition"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* FOOTER COLUMNS */}
            <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/80 mb-4">
                    {column.title}
                  </h4>

                  <ul className="space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-foreground/55 hover:text-gold transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="mt-10 pt-8 border-t border-border/60 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-foreground/[0.03] border border-border/60 text-xs text-foreground/60 flex items-center gap-1">
                <Star size={12} className="fill-gold text-gold" />
                4.9/5 Rating
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-10 px-4 rounded-full bg-foreground/[0.03] border border-border/60 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/15"
              />

              <button
                type="button"
                className="h-10 px-5 rounded-full bg-gold text-black font-semibold text-sm hover:bg-gold/90 transition shadow-[0_0_24px_rgba(212,175,55,0.22)]"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-foreground/50">

            <span>
              © 2026 DartCodes. Made with <span className="text-gold font-bold">♥</span> in Colombo, Sri Lanka
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
