"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Button, Input } from "@heroui/react";
import { Ripple } from "m3-ripple";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { faqs } from "@/data/contact";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ContactContent() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />

      <main className="pb-16">
        {/* --- Hero --- */}
        <section className="relative min-h-screen px-6 text-center overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/imgs/heros/hero_contact.jpeg"
              alt="Career growth concept"
              fill
              className={`object-cover ${currentTheme === "light" ? "opacity-100" : "opacity-80"}`}
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-[#0a0a0a]" />
          </div>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
                Contact Us
              </span>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 text-foreground text-balance">
                Start a <span className="text-gold">Conversation</span>
              </h1>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Got a big idea? We&apos;d love to hear about it. Let&apos;s
                discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Content Grid --- */}
        <Section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-foreground/40 text-sm mb-1 uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-xl hover:text-gold transition-colors text-foreground"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-foreground/40 text-sm mb-1 uppercase tracking-wider">
                        Phone
                      </p>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                        className="text-xl hover:text-gold transition-colors text-foreground"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-foreground/40 text-sm mb-1 uppercase tracking-wider">
                        Office
                      </p>
                      <p className="text-xl text-foreground">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">FAQ</h2>
                <div className="space-y-4">
                  {faqs.map((q, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-foreground/5 border border-foreground/5"
                    >
                      <h3 className="font-medium text-foreground/80">{q}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-foreground/[0.02] p-8 md:p-10 rounded-3xl border border-foreground/10 bg-gold/50"
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80">
                      Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      fullWidth
                      className="border border-foreground/10 hover:border-gold/50 text-foreground bg-foreground/5 rounded-xl h-12 px-4 placeholder:text-foreground/80"
                    />
                  </div>
                  <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80">
                      Email
                    </label>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      fullWidth
                      className="border border-foreground/10 hover:border-gold/50 text-foreground bg-foreground/5 rounded-xl h-12 px-4 placeholder:text-foreground/80"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80">
                    Subject
                  </label>
                  <Input
                    placeholder="Project Inquiry"
                    fullWidth
                    className="w-full border border-foreground/10 hover:border-gold/50 text-foreground bg-foreground/5 rounded-xl h-12 px-4 placeholder:text-foreground/80"
                  />
                </div>
                <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-foreground/5 border border-foreground/10 hover:border-gold/50 text-foreground placeholder:text-foreground/80 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gold text-black font-bold text-lg h-14"
                >
                  <Ripple />
                  Send Message
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
