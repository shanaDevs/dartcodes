"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { values, team, visionMission, whyChooseUs } from "@/data/about";
import { Github, Linkedin, Twitter, Target, Compass, Rocket } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { HeroStats } from "@/components/home/hero-stats";


const teamMedia = [
  { type: "image", src: "/images/aboutUs/images/DSC04454.jpg" },
  { type: "image", src: "/images/aboutUs/images/DSC04468.jpg" },
  { type: "image", src: "/images/aboutUs/images/DSC04465.jpg" },
  { type: "image", src: "/images/aboutUs/images/DSC04473.jpg" },
  // { type: "video", src: "/images/aboutUs/videos/C00015.MP4", poster: "/images/aboutUs/images/DSC04478.jpeg" },
];

export function AboutContent() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-48 pb-20 -mt-40">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-8"
          >
            <div className="h-[2px] w-12 bg-linear-to-r from-gold to-transparent" />
            <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs">
              WHO WE ARE
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-8"
          >
            A Technology Partner Built for <span className="text-gradient-gold">Long-Term Growth.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="space-y-4 text-xl text-foreground/50 leading-relaxed max-w-3xl mx-auto lg:mx-0"
          >
            <p>
              <span className="font-bold">DartCodes</span> was founded on a simple belief: businesses deserve technology that is reliable, scalable, and built with purpose.
            </p>
            <p>
              What began as a small team of passionate developers has evolved into a full-service digital solutions company serving clients across industries and geographies.
            </p>
            <p>
              We don’t just develop software. We partner with businesses to understand their goals, challenges, and vision — then engineer solutions that create real impact. Our success is measured by the growth of our clients.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-foreground/5 backdrop-blur-sm border-y border-foreground/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            { label: "Years Experience", value: "8+" },
            { label: "Successful Projects", value: "120+" },
            { label: "Engineering Experts", value: "25+" },
            { label: "Global Clients", value: "40+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-foreground/40 uppercase tracking-widest text-[10px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Mission - premium two-column section */}
      <Section className="border-y border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-16 items-center px-6">
          {/* Left: mission content */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -24 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* Decorative heading */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-8"
              >
                <div className="h-[2px] w-12 bg-linear-to-r from-gold to-transparent" />
                <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs">
                  Our Vision & Mission
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gold text-center lg:text-left">
                Our Vision & Mission
              </h2>

            </div>

            {/* Stacked items: Vision / Missions */}
            <div className="space-y-6">
              {[
                {
                  label: "Vision",
                  icon: Target,
                  text: visionMission.vision,
                },
                {
                  label: "Missions",
                  icon: Compass,
                  text: visionMission.mission,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  {/* Diamond icon container */}
                  <div className="relative mt-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rotate-45 rounded-2xl border border-gold/60 bg-gold/20 shadow-[0_0_25px_rgba(212,175,55,0.35)] flex items-center justify-center">
                      <div className="-rotate-45 text-gold">
                        <item.icon size={22} />
                      </div>
                    </div>
                  </div>
                  {/* Text block */}
                  <div className="flex-1">
                    <div className="text-sm font-semibold tracking-[0.22em] uppercase text-gold mb-1">
                      {item.label}
                    </div>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: geometric collage of diamond image cards */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 24 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[320px] sm:h-[360px] md:h-[420px] lg:h-[440px] hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md h-full overflow-visible">
              {/* Large anchor card – bigger, half visible on the right */}
              <div className="absolute top-1/2 right-0 sm:right-[-20px] md:right-[-40px] -translate-y-1/2 transform flex items-center justify-center">
                <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rotate-45 rounded-3xl border border-gold/60 bg-background/95 shadow-[0_30px_80px_rgba(0,0,0,0.18)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.85)] overflow-hidden">
                  <div className="-rotate-45 w-full h-full relative">
                    <Image
                      src="/images/aboutUs/images/visionImage.png"
                      alt="Mission visual"
                      fill
                      className="object-cover scale-135 grayscale"
                    />
                  </div>
                </div>
              </div>

              {/* Smallest center-left card */}
              <div className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 transform">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rotate-45 rounded-3xl border border-gold/50 bg-background/95 shadow-[0_14px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_14px_40px_rgba(0,0,0,0.7)] overflow-hidden">
                  <div className="-rotate-45 w-full h-full relative">
                    <Image
                      src="/images/aboutUs/images/visionImage.png"
                      alt="Journey"
                      fill
                      className="object-cover scale-122 grayscale"
                    />
                  </div>
                </div>
              </div>

              {/* Larger supporting card above the smallest */}
              <div className="absolute top-6 left-10 sm:left-12">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rotate-45 rounded-3xl border border-gold/50 bg-background/95 shadow-[0_18px_55px_rgba(0,0,0,0.16)] dark:shadow-[0_18px_55px_rgba(0,0,0,0.75)] overflow-hidden">
                  <div className="-rotate-45 w-full h-full relative">
                    <Image
                      src="/images/aboutUs/images/visionImage.png"
                      alt="Adventure"
                      fill
                      className="object-cover scale-128 grayscale"
                    />
                  </div>
                </div>
              </div>

              {/* Larger supporting card below the smallest */}
              <div className="absolute bottom-6 left-10 sm:left-12">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rotate-45 rounded-3xl border border-gold/40 bg-background/95 shadow-[0_16px_45px_rgba(0,0,0,0.14)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.7)] overflow-hidden">
                  <div className="-rotate-45 w-full h-full relative">
                    <Image
                      src="/images/aboutUs/images/visionImage.png"
                      alt="Landscape"
                      fill
                      className="object-cover scale-128 grayscale"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Journey Section */}
      <Section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-foreground/10 shadow-2xl">
            <video
              src="/images/aboutUs/videos/meeting.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <div className="h-[2px] w-12 bg-linear-to-r from-gold to-transparent" />
              <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs">
                OUR STORY
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold mb-8">From Vision to Global Execution</h2>
            <div className="space-y-6 text-foreground/60 text-lg leading-relaxed">
              <p>
                DartCodes started with a clear mission: to make advanced technology accessible, practical, and growth-driven.
              </p>
              <p>
                Over the years, we have expanded our expertise across web platforms, mobile applications, enterprise systems, and AI-driven solutions, helping startups scale and established organizations modernize.
              </p>
              <p>
                Today, we continue to evolve, building technology that empowers businesses to compete confidently in global markets.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Businesses Trust DartCodes</h2>
            <p className="text-foreground/40">Our commitment to excellence drives every line of code.</p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 shrink-0 font-bold">
                  {i + 1}
                </div>
                <p className="text-foreground/80 font-medium">{reason}</p>
              </motion.div>
            ))}
          </div> */}

          <div className="mt-50">
            <HeroStats />
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="max-w-8xl mx-auto px-2">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-foreground/40">The team behind DartCodes.</p>
        </div>

        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {teamMedia.map((item, index) => (
              <CarouselItem
                key={`${item.type}-${item.src}`}
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-3xl border border-foreground/10 shadow-[0_18px_45px_rgba(15,23,42,0.35)] bg-background">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={`Team photo ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover ${currentTheme === "light"
                        ? "brightness-110 contrast-110"
                        : "brightness-95"
                        }`}
                    />
                  ) : (
                    // <video
                    //   src={item.src}
                    //   poster={item.poster}
                    //   className="h-full w-full object-cover"
                    //   controls
                    //   muted
                    //   playsInline
                    // />
                    <p>Video</p>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Section>

      {/* Closing CTA */}
      {/* <Section className="py-24 max-w-7xl mx-auto px-6">
        <div className="p-16 rounded-[40px] bg-linear-to-br from-gold/20 via-gold/5 to-transparent border border-gold/20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Your <span className="text-gradient-gold">Next Digital Advantage?</span></h2>
            <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
              Let&apos;s turn your roadmap into a high-performance reality. Contact us today for a strategic consultation.
            </p>
            <Button
              size="lg"
              className="bg-gold text-black font-bold h-16 px-10 rounded-2xl text-lg hover:scale-105 transition-transform"
            >
              <Ripple />
              Start Your Project
            </Button>
          </div>
        </div>
      </Section> */}

      <Footer />
    </div>
  );
}
