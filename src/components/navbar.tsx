"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { services } from "@/data/services";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b backdrop-blur-xl bg-white/60 dark:bg-background/70",
          isScrolled ? "border-border/60 py-4 shadow-lg" : "border-transparent py-2",
        )}
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
          <Link href="/" className="relative z-50">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.main.map((link) =>
              link.name === "Services" ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger>
                    <span className="group relative overflow-hidden text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-3 py-2 flex items-center gap-1 cursor-pointer">
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute bottom-0 left-0 w-full h-px bg-gold origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[420px] max-w-[480px] p-0">
                    <div className="px-4 pt-4 pb-2">
                      <span className="text-sm font-semibold text-foreground">
                        Our services
                      </span>
                    </div>
                    <DropdownMenuSeparator className="mx-0" />
                    <div className="p-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <DropdownMenuItem
                            key={service.id}
                            className="rounded-lg px-3 py-3 transition-all duration-200 data-[highlighted]:bg-gold/10 data-[highlighted]:text-foreground data-[highlighted]:translate-x-0.5"
                          >
                            <Link
                              href={`/services?service=${encodeURIComponent(service.id)}`}
                              className="flex w-full items-start gap-3 no-underline outline-none"
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-transform duration-200 group-data-[highlighted]/dropdown-menu-item:scale-110">
                                <Icon className="size-5" />
                              </span>
                              <span className="min-w-0 flex-1 text-left">
                                <span className="block text-sm font-medium text-foreground">
                                  {service.title}
                                </span>
                                <span className="mt-0.5 block text-xs text-foreground/60 leading-snug truncate">
                                  {service.shortDescription}
                                </span>
                              </span>
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative overflow-hidden text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-3 py-2"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gold origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </Link>
              ),
            )}

            <ThemeToggle />

            <Link href="/contact">
              <Button
                size="sm"
                className="bg-gold text-white font-bold hover:bg-gold/90 rounded-full h-11 px-6 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
              >
                <Ripple />
                Book a Call
              </Button>
            </Link>
          </nav>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-4 md:hidden relative z-50">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-gold transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Glow line at bottom when scrolled */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-gold/50 to-transparent transition-opacity duration-500",
            isScrolled ? "opacity-100" : "opacity-0",
          )}
        />
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col justify-center items-center"
          >
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex flex-col gap-8 items-center text-center">
              {navigation.main.map((link, i) =>
                link.name === "Services" ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="w-full px-6"
                  >
                    <button
                      type="button"
                      className="w-full text-4xl font-bold text-foreground hover:text-gold transition-colors flex items-center justify-center gap-2"
                      onClick={() =>
                        setIsMobileServicesOpen((prev) => !prev)
                      }
                    >
                      <span>{link.name}</span>
                      <span
                        className={`text-2xl transform transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="mt-6 space-y-3"
                        >
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.id}
                                href={`/services?service=${encodeURIComponent(service.id)}`}
                                className="flex w-full items-center justify-center gap-3 text-base font-medium text-foreground/80 hover:text-gold transition-colors"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                              >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                  <Icon className="size-4" />
                                </span>
                                <span className="max-w-xs text-left">
                                  <span className="block text-sm font-semibold">
                                    {service.title}
                                  </span>
                                  <span className="mt-0.5 block text-xs text-foreground/60">
                                    {service.shortDescription}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl font-bold text-foreground hover:text-gold transition-colors block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ),
              )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    size="lg"
                    className="bg-gold text-white font-bold text-xl h-14 px-10 rounded-full"
                  >
                    <Ripple />
                    Book a Call
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
