"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import Image from "next/image";
import { benefits, jobs } from "@/data/careers";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CareersContent() {
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
              src="/assets/imgs/heros/hero_careers.jpeg"
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
                Careers
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Join the <span className="text-gold">Revolution</span>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                We are always looking for passionate individuals to help us
                build the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Benefits as Story Cards --- */}
        <section className="py-20 bg-foreground/2 border-y border-foreground/5">
          <Section>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-3">Why People Love Working Here</h2>
              <p className="text-sm md:text-base text-foreground/60 max-w-2xl mx-auto">
                Explore how we think about benefits, growth, and the kind of environment we&apos;re building at
                Dartcodes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <motion.article
                  key={benefit.title + i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group rounded-2xl border border-gold/30 bg-background/80 shadow-[0_14px_40px_rgba(212,175,55,0.25)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.45)] overflow-hidden backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <div
                    className={`relative h-[200px] w-full ${currentTheme === "light" ? "bg-[#f5f5f5]" : "bg-[#0f0f0f]"
                      }`}
                  >
                    <Image
                      src={benefit.thumbnail}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 260px, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
                  </div>

                  <div className="px-5 py-5 space-y-3">
                    <div className="flex items-center justify-between text-[0.7rem] tracking-wide uppercase">
                      <span className="text-foreground/50">{benefit.category}</span>
                      <span className="text-foreground/50">{benefit.date}</span>
                    </div>

                    <h3 className="text-left text-lg md:text-xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-gold">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-foreground/60 leading-relaxed">{benefit.description}</p>

                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[0.7rem] font-medium text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
                        Learn more
                        <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Section>
        </section>

        {/* --- Jobs --- */}
        {/* <Section className="py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Open Positions
            </h2>

            <div className="space-y-4">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-2xl border border-foreground/10 hover:border-gold/30 hover:bg-foreground/2 transition-colors cursor-pointer flex flex-col md:flex-row justify-between md:items-center gap-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-foreground/40 mt-1">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button
                    className="bg-transparent border border-foreground/20 text-foreground hover:bg-gold hover:text-black hover:border-gold"
                    onPress={() => window.open(`mailto:careers@dartcodes.com?subject=Application for ${job.title}`)}
                  >
                    Apply Now
                  </Button>
                </motion.div>
              ))}

              <div className="text-center mt-8 text-foreground/40 text-sm">
                Don&apos;t see your role?{" "}
                <a
                  href="mailto:careers@dartcodes.com"
                  className="text-gold hover:underline"
                >
                  Email us your resume
                </a>
              </div>
            </div>
          </div>
        </Section> */}
      </main>

      <Footer />
    </div>
  );
}
