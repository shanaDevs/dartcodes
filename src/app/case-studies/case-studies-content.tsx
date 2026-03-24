"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { useTheme } from "next-themes";

const allCategories = [
  "All",
  ...Array.from(new Set(caseStudies.map((p) => p.category))),
];

export default function CaseStudiesContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme : "dark";

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((p) => p.category === selectedCategory);

  const featuredCaseStudy = filteredCaseStudies[0];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* --- Hero Section --- */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Soft gradient background instead of a specific image to match the premium tone */}
            <div
              className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${currentTheme === "light" ? "bg-gold/10" : "bg-gold/5"} rounded-full blur-[150px] -z-10`}
            />
            <div
              className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ${currentTheme === "light" ? "bg-purple-500/5" : "bg-purple-900/10"} rounded-full blur-[120px] -z-10`}
            />
            <div
              className={`absolute inset-0 ${currentTheme === "light" ? "bg-linear-to-b from-background/80 via-background/50 to-background" : "bg-linear-to-b from-black/80 via-black/50 to-background"}`}
            />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-linear-to-r from-gold to-transparent hidden md:block" />
                <span className="text-gold font-medium tracking-widest uppercase text-sm px-4 py-1.5 rounded-full border border-gold/10 bg-gold/5">
                  Real Results
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground max-w-5xl leading-[1.05]">
                Transforming{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-gold">700+</span>
                </span>{" "}
                Companies
              </h1>
              <p className="text-xl md:text-2xl text-foreground/50 max-w-2xl leading-relaxed">
                Helping businesses achieve measurable results through powerful
                websites, apps, and marketing.
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-2 mt-12 justify-center md:justify-start"
            >
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === cat
                      ? "bg-gold text-black border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                      : "bg-foreground/5 text-foreground/60 border-foreground/10 hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Case Studies Highlight --- */}
        {featuredCaseStudy && (
          <section className="lg:py-20 lg:px-30 py-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="max-w-auto overflow-hidden rounded-3xl bg-[#F8EFD4] shadow-lg border border-[#EDC988]">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-8 pb-4">
                    <span className="inline-block rounded-full bg-[#EDC988] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                      {featuredCaseStudy.category}
                    </span>

                    <h2 className="mt-4 text-3xl font-extrabold text-[#1e293b]">
                      {featuredCaseStudy.title}
                    </h2>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {featuredCaseStudy.description}
                    </p>

                    {featuredCaseStudy.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {featuredCaseStudy.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-[#DBCC8F] text-xs font-medium text-[#1e293b]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link href={featuredCaseStudy.link}>
                      <button className="mt-8 flex items-center gap-2 rounded-2xl bg-[#EDC988] px-8 py-4 text-black font-semibold text-sm transition-all hover:bg-[#DBCC8F] active:scale-95 shadow-lg shadow-[0_10px_30px_rgba(0,0,0,0.15)] lg:whitespace-nowrap">
                        View Case Study
                        <ArrowRight size={20} />
                      </button>
                    </Link>
                  </div>

                  {/* Right Side Image/Logo */}
                  <div className="flex-1 bg-[#F8EFD4] flex items-center justify-center rounded-bl-[40px] md:rounded-bl-[60px] overflow-hidden">
                    <Image
                      src={featuredCaseStudy.image}
                      alt={featuredCaseStudy.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Stats Section */}
                <div className="flex border-t border-[#EDC988] bg-[#F8EFD4]/80">
                  <div className="flex-1 p-8 text-center">
                    <div className="text-4xl font-bold text-[#EDC988]">3x</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-600">
                      Increase in Online Quote Requests
                    </div>
                  </div>

                  <div className="w-[1px] bg-[#DBCC8F] my-8"></div>

                  <div className="flex-1 p-8 text-center">
                    <div className="text-4xl font-bold text-[#EDC988]">4x</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-600">
                      Faster Page Load Times
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- CTA --- */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-gold/10 via-transparent to-gold/10 border-y border-foreground/10" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-foreground/60 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              Let&apos;s talk about how we can empower your business and deliver
              exceptional results.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold text-black font-bold h-16 px-10 text-lg rounded-full shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:bg-gold/90 transition-all duration-300"
              >
                <Ripple />
                Contact Our Team
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
