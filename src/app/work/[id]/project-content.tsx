"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type Project, type ProjectSection } from "@/data/projects";

function sectionMediaUrls(section: ProjectSection): string[] {
  if (section.images && section.images.length > 0) {
    return [...section.images];
  }
  if (section.image) {
    return [section.image];
  }
  return [];
}

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme : "dark";

  const fallbackSections: ProjectSection[] = [
    {
      feature: "Admin Dashboard",
      description:
        project.description ||
        "This dashboard provides a central hub for managing key business operations.",
      image: project.image,
    },
    {
      feature: "Performance Insights",
      description:
        project.challenge ||
        "The main dashboard displays visual analysis of performance and key business metrics.",
      image: project.galleryImage || project.image,
    },
    {
      feature: "Operational Workflow",
      description:
        project.solution ||
        "Dedicated modules are accessible from the sidebar for day-to-day operation management.",
      image: project.image,
    },
  ];

  const contentSections =
    project.sections && project.sections.length > 0
      ? project.sections
      : fallbackSections;

  const accordionItems = [
    {
      title: "Unified Digital Execution",
      icon: Sparkles,
      content:
        project.description ||
        "A focused concept with a clean delivery path, structured around the goals of this case study.",
    },
    {
      title: "Scalable Tech Architecture",
      icon: ShieldCheck,
      content:
        project.challenge ||
        "Built to stay reliable under growth, with a stack that supports speed, security, and iteration.",
    },
    {
      title: "Transparent Collaboration",
      icon: Users,
      content:
        project.solution ||
        "A delivery model that keeps communication clear, decisions visible, and momentum steady.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black overflow-hidden">
      <Navbar />

      <main className="pb-10 relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(124,58,237,0.08),transparent_30%)]" />
        <div className="relative min-h-screen px-6 text-center overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src={project.cardImage || project.image}
              alt={`${project.title} background`}
              fill
              priority
              sizes="100vw"
              className={`object-cover ${currentTheme === "light" ? "opacity-100" : "opacity-80"}`}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-[#0a0a0a]" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                {project.title}
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>

        <Section containerClassName="py-0">
          <div className="text-center mb-4">
            <h3 className="text-lg md:text-2xl font-semibold text-gold">
              Main Features
            </h3>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {contentSections.map((item, itemIndex) => (
              <li
                key={`${project.id}-feature-badge-${item.feature}-${itemIndex}`}
                className="rounded-full border border-gold/60 bg-gold/15 px-4 py-1.5 text-sm md:text-base font-medium text-gold"
              >
                {item.feature}
              </li>
            ))}
          </ul>
        </Section>

        <Section containerClassName="py-0">
          <div className="space-y-8 md:space-y-12">
            {contentSections.map((section, index) => {
              const mediaUrls = sectionMediaUrls(section);
              const useCarousel = mediaUrls.length > 1;
              const imageFirst = index % 2 === 0;
              const descriptionLines = section.description
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean);
              const bulletLines = descriptionLines
                .filter((line) => line.startsWith("-"))
                .map((line) => line.replace(/^-\s*/, ""));
              const introLines = descriptionLines.filter(
                (line) => !line.startsWith("-"),
              );
              const hasBullets = bulletLines.length > 0;

              return (
                <motion.div
                  key={`${project.id}-${section.feature}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(index * 0.06, 0.22),
                  }}
                  className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-center"
                >
                  {mediaUrls.length > 0 && (
                    <div
                      className={imageFirst ? "order-1" : "order-1 lg:order-2"}
                    >
                      <div className="group relative min-h-96 md:min-h-110 rounded-[2rem] overflow-hidden border border-border/70 bg-foreground/2 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                        {useCarousel ? (
                          <Carousel
                            className="h-full min-h-96 md:min-h-110"
                            opts={{ align: "start", loop: true }}
                            plugins={[Autoplay({ delay: 5000 })]}
                          >
                            <CarouselContent className="ml-0 h-full min-h-96 md:min-h-110">
                              {mediaUrls.map((src, slideIndex) => (
                                <CarouselItem
                                  key={`${project.id}-${section.feature}-slide-${slideIndex}`}
                                  className="pl-0 basis-full"
                                >
                                  <div className="relative min-h-96 md:min-h-110 w-full">
                                    <Image
                                      src={src}
                                      alt={`${section.feature} screenshot ${slideIndex + 1} of ${mediaUrls.length}`}
                                      fill
                                      sizes="(max-width: 1024px) 100vw, 50vw"
                                      className={`transition-transform duration-500 ease-out will-change-transform ${section.fit === "contain" ? "object-contain p-4 md:p-6 scale-100 group-hover:scale-105" : "object-cover scale-100 group-hover:scale-105"}`}
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-background/35 via-transparent to-transparent" />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious
                              variant="secondary"
                              className="left-3 md:left-4 z-20 border-gold/40 bg-background/90 text-foreground hover:bg-background shadow-md"
                            />
                            <CarouselNext
                              variant="secondary"
                              className="right-3 md:right-4 z-20 border-gold/40 bg-background/90 text-foreground hover:bg-background shadow-md"
                            />
                          </Carousel>
                        ) : (
                          <>
                            <Image
                              src={mediaUrls[0]!}
                              alt={`${section.feature} image`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className={`transition-transform duration-500 ease-out will-change-transform ${section.fit === "contain" ? "object-contain p-4 md:p-6 scale-100 group-hover:scale-110" : "object-cover scale-100 group-hover:scale-110"}`}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-background/35 via-transparent to-transparent" />
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  <div
                    className={imageFirst ? "order-2" : "order-2 lg:order-1"}
                  >
                    <div className="rounded-[2rem] border border-border/70 bg-background/80 backdrop-blur-sm p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                      <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
                        Feature
                      </p>
                      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                        {section.feature}
                      </h2>
                      {hasBullets ? (
                        <div className="mt-5 space-y-4 text-base md:text-lg text-foreground/70">
                          {introLines.map((line, lineIndex) => (
                            <p
                              key={`${section.feature}-intro-${lineIndex}`}
                              className="leading-relaxed"
                            >
                              {line}
                            </p>
                          ))}
                          <ul className="list-none pl-4 space-y-3">
                            {bulletLines.map((point, pointIndex) => (
                              <li
                                key={`${section.feature}-point-${pointIndex}`}
                                className="flex items-start gap-3"
                              >
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span className="text-foreground/65">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="mt-5 text-base md:text-lg text-foreground/65 leading-relaxed">
                          {section.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
