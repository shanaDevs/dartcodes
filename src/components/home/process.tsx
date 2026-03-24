"use client";

import { Section } from "@/components/ui/section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Compass,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  ChevronDown,
} from "lucide-react";

const processSteps = [
  {
    id: "step-1",
    num: "01",
    title: "Strategy & Discovery",
    content:
      "We dive deep into your business model, goals, and user expectations to define a strong digital foundation before development begins.",
    icon: Compass,
  },
  {
    id: "step-2",
    num: "02",
    title: "Design & User Experience",
    content:
      "We craft intuitive journeys that simplify complexity, elevate engagement, and align perfectly with your brand identity.",
    icon: Palette,
  },
  {
    id: "step-3",
    num: "03",
    title: "Development & Engineering",
    content:
      "Using modern technologies and scalable architectures, we build secure, high-performance digital products tailored to your growth.",
    icon: Code2,
  },
  {
    id: "step-4",
    num: "04",
    title: "Testing & Quality Assurance",
    content:
      "Rigorous testing ensures stability, performance, and seamless usability across platforms before launch.",
    icon: ShieldCheck,
  },
  {
    id: "step-5",
    num: "05",
    title: "Launch & Growth",
    content:
      "Beyond deployment, we support optimization, analytics, and continuous improvement to help your product evolve with your business.",
    icon: Rocket,
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState("step-1");

  return (
    <Section id="process" className="bg-background overflow-hidden" containerClassName="pt-6 md:pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-2 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            A Proven Path From Idea to{" "}
            <span className="text-gold">Market Success</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
            Our agile process combines strategic thinking, technical excellence,
            and continuous collaboration — ensuring every product is built with
            clarity, efficiency, and long-term impact in mind.
          </p>

          {/* Custom interactive accordion */}
          <div className="space-y-4">
            {processSteps.map((step, index) => {
              const isActive = activeStep === step.id;
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative"
                >
                  {/* Connector line to next step */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-[24px] top-[56px] w-[2px] h-[calc(100%-32px)] z-0">
                      <div
                        className={`w-full h-full transition-all duration-700 ${
                          isActive
                            ? "bg-gradient-to-b from-gold via-gold/50 to-transparent"
                            : "bg-foreground/[0.03]"
                        }`}
                      />
                    </div>
                  )}

                  <div
                    onClick={() => setActiveStep(step.id)}
                    onMouseEnter={() => setActiveStep(step.id)}
                    className={`relative z-10 rounded-2xl border cursor-pointer transition-all duration-500 group ${
                      isActive
                        ? "bg-foreground/[0.04] border-gold/40 shadow-[0_0_40px_-10px_rgba(212,175,55,0.15)] ring-1 ring-gold/10"
                        : "bg-transparent border-foreground/5 hover:border-foreground/15 hover:bg-foreground/[0.02]"
                    }`}
                  >
                    {/* Active left accent bar */}
                    <motion.div
                      layoutId="activeBar"
                      className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gold transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Header */}
                    <div className="flex items-center gap-5 p-4.5 pl-6">
                      {/* Step number badge */}
                      <div
                        className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-500 overflow-hidden ${
                          isActive
                            ? "bg-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                            : "bg-foreground/[0.03] text-foreground/20 group-hover:bg-foreground/10 group-hover:text-foreground/40"
                        }`}
                      >
                        <AnimatePresence mode="wait">
                          {isActive ? (
                            <motion.div
                              key="icon"
                              initial={{ scale: 0, rotate: -20 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 20 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              <StepIcon size={20} />
                            </motion.div>
                          ) : (
                            <motion.span key="num">{step.num}</motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h3
                          className={`font-bold text-base tracking-tight transition-colors duration-300 ${
                            isActive
                              ? "text-foreground"
                              : "text-foreground/40 group-hover:text-foreground/70"
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        className={`flex-shrink-0 transition-colors duration-300 ${
                          isActive
                            ? "text-gold"
                            : "text-foreground/10 group-hover:text-foreground/30"
                        }`}
                      >
                        <ChevronDown
                          size={20}
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                      </motion.div>
                    </div>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            },
                            opacity: { duration: 0.2 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-[4.75rem]">
                            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-[90%]">
                              {step.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full bg-linear-to-b from-foreground/[0.02] to-transparent rounded-[2.5rem] overflow-hidden border border-foreground/[0.05] shadow-2xl"
        >
          {/* Ambient glow backgrounds */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-[120px] animate-pulse [animation-delay:2s]" />
          </div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Dynamic connection lines (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none p-12"
            viewBox="0 0 400 600"
          >
            <defs>
              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Background Path */}
            <path
              d="M 80 85 Q 200 120 340 165 Q 180 250 50 320 Q 250 360 310 350 Q 200 440 150 500"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.05"
            />

            {/* Animated Progress Path */}
            <motion.path
              d="M 80 85 Q 200 120 340 165 Q 180 250 50 320 Q 250 360 310 350 Q 200 440 150 500"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              transition={{ duration: 1, ease: "easeInOut" }}
              animate={{
                strokeDashoffset: [0, -48],
                strokeOpacity: [0.3, 0.6, 0.3],
              }}
              className="filter"
              style={{ filter: "url(#glow)" }}
            />
          </svg>

          {/* Floating step nodes */}
          <div className="absolute inset-0 p-12">
            {processSteps.map((step, i) => {
              const positions = [
                { top: "85px", left: "80px" },
                { top: "165px", right: "60px" },
                { top: "320px", left: "50px" },
                { top: "350px", right: "90px" },
                { top: "500px", left: "150px" },
              ];
              const pos = positions[i];
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{
                    position: "absolute",
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="z-20"
                >
                  <div
                    onClick={() => setActiveStep(step.id)}
                    className="relative group cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.25 : 1,
                        backgroundColor: isActive
                          ? "rgba(212,175,55,1)"
                          : "rgba(212,175,55,0.1)",
                        borderColor: isActive
                          ? "rgba(212,175,55,1)"
                          : "rgba(212,175,55,0.3)",
                      }}
                      className="w-16 h-16 rounded-2xl border flex items-center justify-center backdrop-blur-md transition-shadow duration-500 shadow-2xl"
                    >
                      <span
                        className={`text-xl font-black transition-colors duration-300 ${isActive ? "text-black" : "text-gold"}`}
                      >
                        {i + 1}
                      </span>
                    </motion.div>

                    {/* Ripple/Glow effect for active */}
                    {isActive && (
                      <motion.div
                        layoutId="nodeGlow"
                        className="absolute -inset-4 bg-gold/20 rounded-[2rem] blur-xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    {/* Hover tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                      <div className="bg-foreground text-background text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                        {step.title}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="text-center">
              <div className="text-[12rem] font-black text-foreground/[0.02] select-none leading-none">
                0{processSteps.length}
              </div>
              <p className="text-gold/40 uppercase tracking-[0.4em] text-[10px] -mt-8 font-black">
                Steps to Excellence
              </p>
            </div>
          </div>

          {/* Decorative geometric shapes */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[10%] w-6 h-6 border border-gold/20 rotate-45"
          />
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [45, 50, 45] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[20%] left-[15%] w-4 h-4 bg-gold/10 rotate-45"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-[40%] right-[8%] w-3 h-3 rounded-full bg-gold/20"
          />
          <motion.div
            animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-[35%] right-[40%] w-5 h-5 rounded-full border border-gold/15"
          />
        </motion.div>
      </div>
    </Section>
  );
}
