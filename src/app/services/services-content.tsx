"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Code,
  X,
  ArrowRight,
  ChevronDown,
  Plus,
  Star,
} from "lucide-react";
import { services } from "@/data/services";

const ALL_SERVICES_KEY = "";

type ServiceItem = (typeof services)[0];

function ServiceDetailContent({ service }: { service: ServiceItem }) {
  const videoSrc =
    "video" in service && typeof (service as ServiceItem & { video?: string }).video === "string"
      ? (service as ServiceItem & { video?: string }).video
      : undefined;
  const Icon = service.icon;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
         {/* Full-width row: video left, icon + title + description right */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Left: service video */}
        <div className="w-full aspect-video lg:aspect-auto lg:max-h-[500px] rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/5">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
              poster=""
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-foreground/40">
              No video available
            </div>
          )}
        </div>

        {/* Right: icon, title, long description, then Key Features — stacked vertically */}
        <div className="flex flex-col gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
            <Icon size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {service.title}
          </h3>
          <p className="text-foreground/70 text-lg leading-relaxed">
            {service.longDescription}
          </p>

          {/* Key Features — after longDescription */}
          <div className="bg-foreground/5 rounded-2xl p-6 border border-foreground/10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
              <CheckCircle className="text-gold" size={20} />
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-foreground/60"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesContent() {
  const searchParams = useSearchParams();
  const serviceIdFromUrl = searchParams.get("service") ?? ALL_SERVICES_KEY;

  const [comboboxValue, setComboboxValue] = useState<string>(ALL_SERVICES_KEY);
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const selectedServiceFromCombobox =
    comboboxValue === ALL_SERVICES_KEY
      ? null
      : services.find((s) => s.id === comboboxValue) ?? null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (serviceIdFromUrl && serviceIdFromUrl !== ALL_SERVICES_KEY) {
      const found = services.find((s) => s.id === serviceIdFromUrl);
      if (found) {
        setComboboxValue(found.id);
      }
    } else {
      setComboboxValue(ALL_SERVICES_KEY);
    }
  }, [serviceIdFromUrl]);

  const handleComboboxChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setComboboxValue(value);
      if (value === ALL_SERVICES_KEY) {
        setSelectedService(null);
        return;
      }
      const service = services.find((s) => s.id === value) ?? null;
      setSelectedService(service);
    },
    [],
  );

  // Track which FAQ index is open in the accordion (per currently active service)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Service whose FAQs & reviews will drive the FAQ and testimonials sections:
  // - if a service is selected via the combobox, use that
  // - otherwise fall back to the first service in the list
  const activeServiceForFaq = selectedServiceFromCombobox ?? services[0];
  const faqsForActiveService =
    (activeServiceForFaq as any).faqs ?? [];
  const reviewsForActiveService =
    (activeServiceForFaq as any).reviews ?? [];

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />

      <main className="pt-24 pb-16">
           {/* --- Conditional content: selected service detail or full grid --- */}
        <Section>
          <AnimatePresence mode="wait">
            {selectedServiceFromCombobox ? (
              <motion.div
                key={`detail-${selectedServiceFromCombobox.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ServiceDetailContent service={selectedServiceFromCombobox} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Section>

        {/* --- Why Choose Us --- */}
        <Section className="py-32 bg-foreground/2 border-y border-foreground/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
                Why DartCodes?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Engineering <span className="text-gold">Excellence</span> <br />
                at Every Step.
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                We don&apos;t just build software; we build robust, scalable
                solutions that stand the test of time. Our engineering-first
                approach ensures that your product is secure, performant, and
                ready for growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "High Performance",
                    desc: "Optimized for speed and efficiency.",
                  },
                  {
                    icon: Shield,
                    title: "Bank-Grade Security",
                    desc: "Protecting your data at all costs.",
                  },
                  {
                    icon: Clock,
                    title: "On-Time Delivery",
                    desc: "We respect your timelines.",
                  },
                  {
                    icon: Code,
                    title: "Clean Code",
                    desc: "Maintainable and scalable architecture.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-foreground/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side */}
            <div className={`relative h-[500px] w-full bg-foreground/5 rounded-3xl border border-foreground/10 overflow-hidden flex items-center justify-center group ${currentTheme === "light" ? "shadow-lg" : ""}`}>
              <div className="absolute inset-0 bg-linear-to-br from-gold/5 via-transparent to-purple-500/5 opacity-50" />

              {/* Coding demo video */}
              <motion.div
                initial={{ opacity: 0.5, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className={`relative w-full h-full ${currentTheme === "light" ? "bg-white border-foreground/10" : "bg-[#111] border-white/10"} rounded-xl border shadow-2xl overflow-hidden`}
              >
                <video
                  src="/images/services/videos/coding.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* --- Testimonials Section (driven by active service reviews) --- */}
        <Section className="py-20">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12 space-y-3">
              <span className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                Testimonials
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                See what our happy users are sharing about us!
              </h2>
            </div>

            {/* Reviews carousel on mobile */}
            <div className="md:hidden">
              <Carousel
                opts={{ loop: true, align: "start" }}
                className="w-full"
              >
                <CarouselContent>
                  {reviewsForActiveService.map(
                    (
                      review: { name: string; rating: number; quote: string },
                      index: number,
                    ) => (
                      <CarouselItem key={`${activeServiceForFaq.id}-review-mobile-${index}`}>
                        <div
                          className={`flex flex-col items-center rounded-3xl border p-6 text-center transition-colors duration-300 ${
                            currentTheme === "light"
                              ? "bg-white border-gold/15 hover:border-gold/40 shadow-sm"
                              : "bg-foreground/[0.04] border-gold/25 hover:border-gold/60 shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
                          }`}
                        >
                          {/* Avatar */}
                          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold/70 text-black font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                            {review.name.charAt(0)}
                          </div>

                          {/* Stars */}
                          <div className="mb-3 flex items-center justify-center gap-1">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                className={`h-4 w-4 ${
                                  starIndex < review.rating
                                    ? "text-gold fill-gold"
                                    : "text-foreground/20"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Name */}
                          <p className="mb-2 text-sm font-semibold text-foreground">
                            {review.name}
                          </p>

                          {/* Quote */}
                          <p className="text-xs text-foreground/70 leading-relaxed">
                            {review.quote}
                          </p>
                        </div>
                      </CarouselItem>
                    ),
                  )}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Reviews grid on desktop/tablet */}
            <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              {reviewsForActiveService.map(
                (
                  review: { name: string; rating: number; quote: string },
                  index: number,
                ) => (
                  <div
                    key={`${activeServiceForFaq.id}-review-${index}`}
                    className={`flex flex-col items-center rounded-3xl border p-6 md:p-7 text-center transition-colors duration-300 ${
                      currentTheme === "light"
                        ? "bg-white border-gold/15 hover:border-gold/40 shadow-sm"
                        : "bg-foreground/[0.04] border-gold/25 hover:border-gold/60 shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
                    }`}
                  >
                    {/* Avatar */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold/70 text-black font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                      {review.name.charAt(0)}
                    </div>

                    {/* Stars */}
                    <div className="mb-3 flex items-center justify-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`h-4 w-4 ${
                            starIndex < review.rating
                              ? "text-gold fill-gold"
                              : "text-foreground/20"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Name */}
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      {review.name}
                    </p>

                    {/* Quote */}
                    <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                      {review.quote}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </Section>

        <Section className="py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: FAQ intro and CTA */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-4 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                <span className="text-gold font-semibold tracking-[0.25em] uppercase text-xs">
                  FAQs
                </span>
              </div>

              {/* FAQ heading and description adapt to the currently active service */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Frequently Asked Questions about {activeServiceForFaq.title}
              </h2>

              <p className="text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl">
                Explore key questions clients often ask about our{" "}
                <span className="font-semibold text-foreground">
                  {activeServiceForFaq.title}
                </span>{" "}
                offering—from strategy and implementation to long-term support and scaling.
              </p>

              <Link href="/contact">
                <Button
                  className="inline-flex items-center gap-2 bg-gold text-black font-semibold rounded-xl px-6 h-11 shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(212,175,55,0.55)] hover:bg-gold/90 transition-all"
                >
                  <Ripple />
                  Still have a question?
                  <ArrowRight size={18} className="ml-1" />
                </Button>
              </Link>
            </div>

            {/* Right: FAQ accordion driven by service-specific FAQs from src/data/services.ts */}
            <div className="space-y-4">
              {faqsForActiveService.map(
                (
                  item: { question: string; answer: string },
                  index: number,
                ) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <motion.div
                      key={`${activeServiceForFaq.id}-${index}`}
                    initial={false}
                    animate={{ scale: isOpen ? 1.01 : 1 }}
                    className={`rounded-2xl border transition-colors duration-300 cursor-pointer ${
                      currentTheme === "light"
                        ? "bg-white border-gold/15 hover:border-gold/40 shadow-sm"
                        : "bg-foreground/[0.04] border-gold/20 hover:border-gold/50 hover:bg-foreground/[0.08] shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
                    }`}
                    >
                      <button
                        type="button"
                        className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-start justify-between gap-4"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-semibold text-foreground">
                            {item.question}
                          </h3>
                        </div>
                        <div className="shrink-0 flex items-center justify-center rounded-full border border-gold/40 bg-gold/5 w-8 h-8">
                          <Plus
                            className={`w-4 h-4 text-gold transition-transform duration-200 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          />
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-sm md:text-base text-foreground/70 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                },
              )}
            </div>
          </div>
        </Section>

        {/* --- CTA Section --- */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl bg-gradient-to-br from-foreground/[0.08] to-foreground/[0.02] border border-foreground/10 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to <span className="text-gold">Transform</span> Your Idea?
            </h2>
            <p className="text-foreground/60 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to build something extraordinary. Schedule
              a free consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="h-12 px-8 bg-gold text-black font-bold text-base rounded-xl hover:bg-gold/90 w-full sm:w-auto">
                  <Ripple />
                  Start a Project
                </Button>
              </Link>
              <Link href="/work" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="h-12 px-8 border-foreground/20 text-foreground font-medium text-base rounded-xl hover:bg-foreground/5 w-full sm:w-auto hover:border-foreground/50"
                >
                  <Ripple />
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* --- Service Detail Modal --- */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              layoutId={`service-card-${selectedService.id}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-background w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-foreground/10 shadow-2xl pointer-events-auto relative"
              >
                <Button
                  isIconOnly
                  className="absolute top-4 right-4 z-10 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-full"
                  onPress={() => setSelectedService(null)}
                >
                  <X size={20} />
                </Button>

                <div className="p-8 md:p-12">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 text-gold">
                    <selectedService.icon size={32} />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                    {selectedService.title}
                  </h2>
                  <p className="text-gold/80 font-medium uppercase tracking-wider mb-8">
                    {selectedService.description}
                  </p>

                  <p className="text-foreground/70 text-lg leading-relaxed mb-10">
                    {selectedService.longDescription}
                  </p>

                  <div className="bg-foreground/5 rounded-2xl p-6 border border-foreground/10 mb-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <CheckCircle className="text-gold" size={20} />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-foreground/60"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button
                        className="bg-gold text-black font-bold h-12 px-8 rounded-xl hover:bg-gold/90 w-full"
                        onPress={() => setSelectedService(null)}
                      >
                        <Ripple />
                        Get Started
                        <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
