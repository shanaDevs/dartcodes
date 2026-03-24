"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const allCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function WorkContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* --- Hero Section --- */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/imgs/heros/hero_work.jpeg"
              alt="Project portfolio showcase"
              fill
              className={`object-cover ${currentTheme === "light" ? "opacity-20" : "opacity-30"}`}
              priority
            />
            <div className={`absolute inset-0 ${currentTheme === "light" ? "bg-linear-to-b from-background/90 via-background/70 to-background" : "bg-linear-to-b from-black/80 via-black/50 to-[#0a0a0a]"}`} />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
                Our Work
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
                Selected <span className="text-gold">Projects</span>
              </h1>
              <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed">
                A showcase of our best work. We partner with visionaries to
                build digital products that matter.
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-2 mt-12"
            >
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                    ? "bg-gold text-black border-gold"
                    : `bg-foreground/5 text-foreground/60 border-foreground/10 hover:border-gold/30 hover:text-foreground`
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Projects Grid --- */}
        <Section className="pb-32">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-foreground/[0.03] border border-foreground/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-colors"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Button */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <Link href={`/work/${project.id}`}>
                        <Button className="rounded-full bg-white text-black font-bold h-12 px-6 hover:bg-gold hover:scale-105">
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-gold transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <Link
                        href={`/work/${project.id}`}
                        className="text-foreground/40 hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight size={24} />
                      </Link>
                    </div>

                    <p className="text-foreground/60 text-sm mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded bg-foreground/5 text-foreground/40 text-xs border border-foreground/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Section>

        {/* --- CTA --- */}
        <section className="py-20 bg-gold text-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
              Have a Project in Mind?
            </h2>
            <p className="text-black/70 text-xl mb-8 max-w-2xl mx-auto">
              We&apos;d love to help you bring your vision to life. Let&apos;s discuss how
              we can work together.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white font-bold h-14 px-8 text-lg rounded-xl hover:bg-black/80">
                <Ripple />
                Start Your Project
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
