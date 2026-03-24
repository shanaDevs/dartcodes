"use client";

import { Section } from "@/components/ui/section";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState, useEffect } from "react";
import { services } from "@/data/services";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

function ServiceCard({
  service,
  index,
  theme,
}: {
  service: (typeof services)[0];
  index: number;
  theme: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Use the light mode image for web development if it's light theme
  const imageSrc = theme === "light" && service.title === "Web Development"
    ? "/images/service_web_light.png"
    : service.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-gold/30 dark:border-gold/40 bg-white/5 dark:bg-white/5 p-8 shadow-[0_18px_45px_rgba(212,175,55,0.25)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_26px_70px_rgba(212,175,55,0.45)] dark:hover:shadow-[0_26px_80px_rgba(0,0,0,0.9)] hover:bg-white/8 dark:hover:bg-white/10 transition-all duration-300"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-[200px] w-full rounded-xl overflow-hidden mb-6 border border-foreground/5">
        <Image
          src={imageSrc}
          alt={service.title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${theme === "light" && service.title !== "Web Development" ? "brightness-110 grayscale-[0.2]" : ""}`}
        />
        <div className={`absolute inset-0 group-hover:bg-black/10 transition-colors ${theme === "light" ? "bg-white/10" : "bg-black/20"}`} />
      </div>

      <h3 className="relative text-2xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
        {service.title}
      </h3>

      <p className="relative text-foreground/50 leading-relaxed mb-6 group-hover:text-foreground/70 transition-colors duration-300">
        {service.description}
      </p>

      <div className="relative flex flex-col gap-2 group/link">
        <Link
          href={`/services?service=${encodeURIComponent(service.id)}`}
          className="inline-flex items-center text-sm font-medium text-gold group/link focus:outline-none"
        >
          <span className="relative">
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">
              Explore capabilities
            </span>
            <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover/link:w-full" />
          </span>
          <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export function Services() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";

  return (
    <Section id="services" className="bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mb-20 text-center max-w-3xl mx-auto">
        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3 block">
          Our Expertise
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Digital Solutions Designed to{" "}
          <span className="text-gradient-gold">
            Move Businesses Forward
          </span>
        </h2>
        <p className="text-foreground/50 text-lg leading-relaxed">
        We don’t just develop software — we build digital ecosystems that solve real problems, improve efficiency, and unlock new growth opportunities. From idea validation to long-term scaling, our team works as your strategic technology partner.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} theme={currentTheme as string} />
        ))}
      </div>
    </Section>
  );
}
