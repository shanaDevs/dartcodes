"use client";

import { Section } from "@/components/ui/section";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import LogoLoop from "@/components/LogoLoop";

const stats = [
  { value: 100, label: "Projects Delivered", suffix: "+" },
  { value: 98, label: "Client Retention", suffix: "%" },
  { value: 5, label: "Years of Excellence", suffix: "+" },
  { value: 10, label: "Awards Won", suffix: "" },
];

const imageLogos = [
  { src: "/images/logos/logo1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/images/logos/logo2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/images/logos/logo3.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/images/logos/logo4.jpeg", alt: "Company 4", href: "https://company4.com" },
  { src: "/images/logos/logo5.png", alt: "Company 5", href: "https://company5.com" },
  { src: "/images/logos/logo7.png", alt: "Company 7", href: "https://company7.com" },
  { src: "/images/logos/logo8.png", alt: "Company 8", href: "https://company8.com" },
  { src: "/images/logos/logo9.png", alt: "Company 9", href: "https://company9.com" },
  { src: "/images/logos/logo10.jpeg", alt: "Company 9", href: "https://company9.com" },
  { src: "/images/logos/logo11.jpeg", alt: "Company 6", href: "https://company6.com" },
  { src: "/images/logos/logo12.png", alt: "Company 6", href: "https://company6.com" },
  { src: "/images/logos/logo13.png", alt: "Company 6", href: "https://company6.com" },
  { src: "/images/logos/logo14.png", alt: "Company 6", href: "https://company6.com" },
  { src: "/images/logos/logo15.png", alt: "Company 6", href: "https://company6.com" },
  { src: "/images/logos/logo16.png", alt: "Company 6", href: "https://company6.com" },
  { src: "/images/logos/logo17.png", alt: "Company 6", href: "https://company6.com" },
  { src: "/images/logos/logo18.png", alt: "Company 6", href: "https://company6.com" },
  // { src: "/images/logos/logo10.jpeg", alt: "Company 10", href: "https://company10.com" },
];

function Counter({
  from,
  to,
  suffix,
}: {
  from: number;
  to: number;
  suffix: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = {
      value: from,
      stop: false,
    };

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (controls.stop) return;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4);

      const current = Math.floor(from + (to - from) * ease);
      node.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      controls.stop = true;
    };
  }, [isInView, from, to, suffix]);

  return (
    <span
      ref={nodeRef}
      className="text-6xl md:text-7xl font-bold text-gradient-gold"
    >
      {from}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <Section id="stats" className="relative overflow-hidden" containerClassName="pb-6 md:pb-8">
      <div className="bg-foreground/[0.03] p-16">
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs bg-gold/5 px-4 py-2 rounded-full border border-gold/10 inline-block mb-4">
            Trust Metrics
          </span>
          <h3 className="text-foreground font-medium text-lg lg:text-xl uppercase tracking-wider block">
            Delivering measurable results for growing digital businesses.
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Counter from={0} to={stat.value} suffix={stat.suffix} />
              <p className="text-foreground/60 mt-4 text-lg font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ height: '260px', position: 'relative', overflow: 'hidden' }} className="mt-50 mb-50 bg-background">
        <div className="flex flex-col items-center gap-4 pt-6">
          <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs">
            Trusted by
          </span>
          <div className="h-[2px] w-12 bg-linear-to-r from-gold to-transparent" />
        </div>

        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={180}
          gap={72}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </Section>
  );
}
