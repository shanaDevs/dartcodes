"use client";

import { Section } from "@/components/ui/section";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  ShoppingBag,
  Wallet,
  Plane,
  GraduationCap,
  Home,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";


const industries = [
  {
    id: "retail",
    label: "Retail",
    title: "Retail & E-commerce",
    icon: ShoppingBag,
    description:
      "We build high-performance commerce platforms that blend seamless user journeys with robust backend scalability. Our solutions are designed to drive conversions, automate inventory, and deliver personalized shopping experiences.",
    features: [
      "Omnichannel Commerce",
      "Custom Storefronts",
      "Inventory Systems",
      "Payment Integration",
    ],
    image: "/images/industries/retail.png",
  },
  {
    id: "fintech",
    label: "Fintech",
    title: "Fintech & Banking",
    icon: Wallet,
    description:
      "Engineering secure and transparent financial ecosystems. We develop robust platforms for digital banking, payment processing, and asset management, ensuring high-frequency performance and regulatory compliance.",
    features: [
      "Banking Systems",
      "Payment Gateways",
      "Asset Management",
      "Fraud Detection",
    ],
    image: "/images/industries/fintech.png",
  },
  {
    id: "travel",
    label: "Travel",
    title: "Travel & Hospitality",
    icon: Plane,
    description:
      "Modernizing the travel experience through intelligent booking engines and management systems. We create scalable solutions that optimize operations, increase bookings, and enhance guest engagement.",
    features: [
      "Booking Engines",
      "PMS Integration",
      "Pricing Algorithms",
      "Loyalty Programs",
    ],
    image: "/images/industries/travel.png",
  },
  {
    id: "edtech",
    label: "Education",
    title: "EdTech & Learning",
    icon: GraduationCap,
    description:
      "Transforming education with engaging digital learning platforms. We build intuitive LMS solutions, interactive course modules, and collaborative tools designed to deliver knowledge at scale.",
    features: [
      "LMS Solutions",
      "Interactive Modules",
      "Progress Tracking",
      "Virtual Classrooms",
    ],
    image: "/images/industries/edtech.png",
  },
  {
    id: "realestate",
    label: "PropTech",
    title: "Real Estate & PropTech",
    icon: Home,
    description:
      "Smart technology for the property market. From virtual tour integrations to complex CRM systems, we build platforms that streamline property management, sales, and investment analysis.",
    features: [
      "Property Management",
      "Virtual Tours",
      "Investment Tools",
      "CRM Systems",
    ],
    image: "/images/industries/realestate.png",
  },
];

export function Industries() {
  const [activeTab, setActiveTab] = useState("retail");

  const currentIndustry =
    industries.find((i) => i.id === activeTab) || industries[0];

  return (
    <Section
      id="industries"
      className="relative overflow-hidden bg-background"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-9xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
              Specialized Expertise
            </span>
            <div className="h-[1px] w-12 bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight"
          >
            Solutions for{" "}
            <span className="text-gradient-gold">Global Markets.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-foreground/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We combine deep sector knowledge with technical mastery to solve
            complex challenges across diverse industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Display */}
          <div className="lg:col-span-8 bg-foreground/[0.02] dark:bg-foreground/[0.03] border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 min-h-[600px] relative overflow-hidden">
            {" "}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center h-full"
              >
                <div className="flex flex-col h-full justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                    Industry Leader
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                    {currentIndustry.title}
                  </h3>

                  <p className="text-lg text-foreground/60 leading-relaxed mb-10">
                    {currentIndustry.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {currentIndustry.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 group"
                      >
                        <CheckCircle2 size={18} className="text-gold" />
                        <span className="text-foreground/80 font-medium group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all group w-fit">
                    Learn about our {currentIndustry.label} solutions
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className="relative aspect-square md:aspect-video xl:aspect-square w-full rounded-3xl overflow-hidden group">
                  <motion.div
                    key={`${activeTab}-image`}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={currentIndustry.image}
                      alt={currentIndustry.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 40vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vertical Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const isActive = activeTab === industry.id;

              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`group relative flex items-center gap-5 p-5 rounded-2xl transition-all duration-500 text-left outline-none cursor-pointer ${isActive
                      ? "bg-foreground/5 dark:bg-foreground/5 shadow-inner border border-foreground/10"
                      : "hover:bg-foreground/[0.02] border border-transparent"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-6 text-gold"
                    >
                      <ArrowLeft size={20} />
                    </motion.div>
                  )}
                  <div className="flex-1 ml-8">
                    <h4
                      className={`text-lg font-bold transition-all duration-500 ${isActive
                          ? "text-foreground"
                          : "text-foreground/40 group-hover:text-foreground/70"
                        }`}
                    >
                      {industry.label}
                    </h4>
                  </div>
                  <div
                    className={`p-3 rounded-xl transition-all duration-500 ${isActive
                        ? "bg-gold text-black"
                        : "bg-foreground/5 text-foreground/40 group-hover:text-foreground/70"
                      }`}
                  >
                    <Icon size={24} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
