"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [email, setEmail] = useState("");

  return (
    <Section id="contact" className="relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/10 shadow-[0_22px_70px_rgba(15,23,42,0.35)] backdrop-blur-2xl p-8 md:p-12 items-center">
          {/* Left – Contact Info */}
          <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-foreground/50 font-semibold">
                  Contact DartCodes
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Let&apos;s Build Your <span className="text-gradient-gold">Next Big Move.</span>
              </h3>
              <p className="text-foreground/60 text-base md:text-lg mb-10 max-w-md leading-relaxed">
                Have a platform to build, a system to modernize, or a product to scale? Let&apos;s discuss how DartCodes can help you drive real business growth.
              </p>

              <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "hello@dartcodes.com",
                  href: "mailto:hello@dartcodes.com",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+94 77 123 4567",
                  href: "tel:+94771234567",
                },
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value: "Colombo, Sri Lanka",
                  href: "https://maps.google.com",
                },
              ].map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-foreground mb-1 font-bold">
                      {info.label}
                    </div>
                    <div className="text-base md:text-lg text-foreground group-hover:text-gold transition-colors font-medium">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          </div>

          {/* Right – Gold Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gold/40 dark:bg-gold/30 rounded-[2.5rem] blur-3xl opacity-70 group-hover:opacity-90 transition-all duration-700" />
            <div className="relative rounded-[2.5rem] bg-gold/50 text-black p-8 md:p-10 lg:p-12 shadow-gold/10 overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl md:text-3xl font-bold mb-3">Start Your Roadmap.</h4>
                <p className="text-white/80 text-md md:text-base mb-8 leading-relaxed">
                  Subscribe to our digital engineering insights and receive a strategic project planning template.
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full h-12 md:h-14 rounded-2xl px-4 md:px-5 bg-white/95 text-black placeholder:text-black/40 border border-white/40 focus:outline-none focus:border-black/40 focus:ring-0 transition-colors"
                    />
                  </div>

                </div>

                <Button
                  size="lg"
                  className="w-full bg-black text-gold font-bold h-14 md:h-16 rounded-2xl text-base md:text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-3"
                >
                  <Ripple />
                  <span>Submit</span>
                  <Send size={18} />
                </Button>

                <p className="mt-5 text-[11px] md:text-xs text-black/70 text-center">
                  By proceeding, you agree to our{" "}
                  <span className="font-semibold underline underline-offset-4 cursor-pointer hover:text-black">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>

              {/* Decorative accents */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-8 w-36 h-36 rounded-full bg-black/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
