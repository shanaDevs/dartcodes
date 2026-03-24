"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Target,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  MonitorSmartphone,
  Check,
  ArrowRight,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const phases = [
  {
    id: "01",
    title: "Solution Phase 1",
    description:
      "Successfully converted decades of manual salon records into a structured digital database to ensure data integrity.",
  },
  {
    id: "02",
    title: "Solution Phase 2",
    description:
      "Implemented a secure three-tier access system (Admin, Employee, Cashier) to manage permissions and protect sensitive financial data.",
  },
  {
    id: "03",
    title: "Solution Phase 3",
    description:
      "Developed an automated calculation engine for the Admin to track daily and monthly profits accurately without manual errors.",
  },
  {
    id: "04",
    title: "Solution Phase 4",
    description:
      "Created a seamless process where Employee invoices are sent to the Cashier for real-time approval and payment processing.",
  },
  {
    id: "05",
    title: "Solution Phase 5",
    description:
      "Integrated a live stock management system that updates automatically as products are used or sold during services.",
  },
  {
    id: "06",
    title: "Solution Phase 6",
    description:
      "Replaced manual salary calculations with a digital payroll module that accounts for employee commissions and performance.",
  },
  {
    id: "07",
    title: "Solution Phase 7",
    description:
      "Designed an intuitive interface with a professional theme to ensure staff members could easily transition from manual to digital work.",
  },
];

const stats = [
  { label: "More Quote Requests", value: "3X" },
  { label: "Improved Local Search Rankings", value: "80%" },
  { label: "Faster Website Load Speed", value: "4X" },
  { label: "Mobile Conversion Growth", value: "50%" },
];

const otherProjects = [
  {
    title: "RRR Bricklaying",
    category: "Bricklaying",
    desc: "Established a strong online presence in Gippsland.",
    img: "/images/services/database.png",
  },
  {
    title: "DJ Home Movers",
    category: "Removalist",
    desc: "A trusted Sydney-based removalist company.",
    img: "/images/services/database.png",
  },
  {
    title: "TSA Cleaning Services",
    category: "Cleaning",
    desc: "A trusted cross-country cleaning brand.",
    img: "/images/services/database.png",
  },
];

export default function CaseStudyContent() {
  const params = useParams();
  const router = useRouter();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme : "dark";

  const study: any = caseStudies.find((s) => s.id == params.id);

  const steps = [
    "Custom Software Development: Tailored solutions designed to solve specific business challenges.",
    "UI/UX Modernization: Creating intuitive, user-centric interfaces with professional aesthetics.",
    "Legacy-to-Digital Migration: Seamlessly transitioning manual workflows into automated systems.",
    "API & Third-Party Integration: Connecting your software with essential tools for better connectivity.",
    "Database Management & Security: Ensuring data integrity and high-level protection for business records.",
    "Performance & Speed Optimization: Building lightweight applications that deliver lightning-fast results.",
    "Scalable Architecture Design: Developing systems that grow alongside your business expansion.",
    "End-to-End QA Testing: Rigorous bug tracking and quality assurance for a flawless user experience.",
  ];

  const goals = [
    {
      title: "Digital Transformation",
      description:
        "To transition from a manual, paper-based record-keeping system to a fully automated digital platform for enhanced efficiency.",
    },
    {
      title: "Operational Transparency",
      description:
        "To provide the Admin with real-time visibility into daily sales, service history, and overall business performance.",
    },
    {
      title: "​Optimized Workflow",
      description:
        "To establish a seamless communication bridge between Employees and the Cashier for faster service approvals and payments.",
    },
    {
      title: "Inventory Control",
      description:
        "To implement a live tracking system for salon products and resources to prevent stockouts and reduce waste.",
    },
    {
      title: "​Scalable Business Model",
      description:
        "To build a robust software foundation that supports future business expansion and the integration of new salon services.",
    },
  ];

  const technologies = [
    "Web Development",
    "Branding",
    "UI/UX Design",
    "Mobile App",
  ];

  const mockups = [
    { src: "/images/services/salon/saloon5.png", alt: "Mobile app view" },
    { src: "/images/services/salon/saloon6.png", alt: "Desktop website view" },
    {
      src: "/images/services/salon/saloon7.png",
      alt: "Full website experience",
    },
    {
      src: "/images/services/salon/saloon8.png",
      alt: "Mobile responsive view",
    },
  ];

  useEffect(() => {
    if (!study && params.id) {
      router.push("/case-studies");
    }
  }, [study, params.id, router]);

  if (!study) return <div className="min-h-screen bg-background" />;

  return (
    <div>
      <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
        <Navbar />

        <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
              Central Salon
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Redefining beauty excellence since 1984. Combining decades of
              trusted expertise with modern digital precision to provide you
              with a seamless and premium grooming experience.
            </p>
          </div>
        </section>

        {/* Two-column media grid: video + images */}
        <section className="w-full px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Full-height video */}
            <div className="relative aspect-video md:aspect-[4/3] lg:aspect-[4/3] w-full md:h-[600px] overflow-hidden rounded-3xl shadow-xl">
              <video
                src="/images/services/salon/salon.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: 2x2 image grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="relative w-full overflow-hidden rounded-2xl h-[80%]">
                <img
                  src="/images/services/salon/image1.jpeg"
                  alt="Project detail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl h-[80%]">
                <img
                  src="/images/services/salon/image5.jpeg"
                  alt="Project detail 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl h-[80%] lg:-mt-20 -mt-10">
                <img
                  src="/images/services/salon/image3.jpeg"
                  alt="Project detail 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl h-[80%] lg:-mt-20 -mt-10">
                <img
                  src="/images/services/salon/image4.jpeg"
                  alt="Project detail 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* discription */}
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
          {/* 1. About the Client and Project Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Description */}
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                About the Client and Project
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Established in 1984, Central Salon has been serving clients for
                decades with dedication. Transitioning from an entirely manual
                operation, the salon has now embraced modernization through this
                custom web application. This project features distinct
                interfaces for Cashiers, Employees, and Administrators to
                streamline daily operations. The Admin portal provides
                comprehensive financial analysis with daily and monthly profit
                tracking, while Employees can manage and generate invoices,
                subject to Cashier approval. By centralizing management of
                stock, payroll, and appointments, this digital system not only
                boosts efficiency but also elevates the overall client
                experience, blending tradition with technology.
              </p>
            </div>

            {/* Right: Info Grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 border-l border-slate-100 lg:pl-12">
              <div>
                <p className="text-sm font-semibold text-muted-foreground capitalize tracking-wider mb-1">
                  Industry
                </p>
                <p className="text-base text-xl font-bold text-foreground">
                  Beauty and Wellness
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground capitalize tracking-wider mb-1">
                  Business Model
                </p>
                <p className="text-base text-xl font-bold text-foreground">
                  Service Provision
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground capitalize tracking-wider mb-1">
                  Location
                </p>
                <p className="text-base text-xl font-bold text-foreground">
                  Sri Lanka
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground capitalize tracking-wider mb-1">
                  Build Your Idea
                </p>
                <p className="text-base text-xl font-bold text-gold cursor-pointer hover:underline">
                  Consult Our Experts
                </p>
              </div>
            </div>
          </section>

          {/* 2. The Challenge Card Section */}
          <section className="relative overflow-hidden rounded-[40px] shadow-2xl bg-[#4E4E4E]">
            <div className="flex flex-col md:flex-row min-h-[450px]">
              {/* Left: Image Side */}
              <div className="w-full md:w-[45%] relative">
                <img
                  src="/images/services/salon/image5.jpeg" // Replace with your image
                  alt="Work in progress"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content Side with Pattern Overlay */}
              <div className="w-full md:w-[55%] p-12 md:p-16 relative flex flex-col justify-center">
                {/* Background Pattern (Subtle dots/plus signs) */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                ></div>

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    The Challenge
                  </h2>

                  <ul className="space-y-4">
                    {[
                      "Exactly understanding the customer's needs.",
                      "Deciding on the tech stack based on the requirements.",
                      "Working according to a plan when working as a team.",
                      "Verifying if the finished application matches the client's expectations.",
                      "Addressing bugs promptly when they arise.",
                      "Ensuring highly accurate calculations throughout the application.",
                      "Creating an intuitive and user-friendly design.",
                      "Maintaining the application continuously without any issues.",
                      "Ensuring parity between the local development environment and the production live server environment.",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-white/90 text-lg leading-snug"
                      >
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#EDC988]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-3 transition-colors duration-300">
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side Content */}
              <div>
                <h2 className="text-4xl md:text-4xl font-bold text-foreground leading-tight">
                  What Makes Our Process <br />
                  <span className="text-amber-500">Different</span>
                </h2>
                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
                  At DartCode, we streamline the entire development lifecycle,
                  delivering high-performance, scalable software solutions
                  designed to transform manual business processes into seamless
                  digital experiences from day one.
                </p>
                <button className="mt-10 flex items-center gap-2 rounded-lg bg-zinc-900 dark:bg-amber-500 px-8 py-4 text-zinc-50 dark:text-zinc-950 font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
                  Explore Our Services
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Right Side: Step List */}
              <div className="relative pl-8 md:pl-12">
                {/* Vertical Dotted Line */}
                <div className="absolute left-0 top-2 bottom-2 w-px border-l-2 border-dashed border-zinc-200 dark:border-zinc-800"></div>

                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex items-center group"
                    >
                      {/* Check Icon */}
                      <div className="absolute -left-[41px] md:-left-[49px] z-10 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-gold text-white shadow-xl shadow-gold/20 transition-transform group-hover:scale-110">
                        <Check size={16} strokeWidth={3} />
                      </div>

                      {/* Step Card */}
                      <div className="w-full rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-4 md:px-5 transition-all hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-md dark:hover:bg-zinc-900">
                        <p className="text-sm md:text-base font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-amber-500 transition-colors">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Visual Showcase */}
          <section className="bg-white dark:bg-zinc-950 py-20 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              {/* Section Title (Optional) */}
              <div className="mb-12">
                <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
                  <span className="h-8 w-2 bg-amber-500 rounded-full"></span>
                  Visual <span className="text-amber-500">Showcase</span>
                </h2>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
                {mockups.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[32px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Subtle Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Gold Accent Corner (Subtle) */}
                      <div className="absolute top-6 right-6 h-10 w-10 border-t-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/100 transition-all duration-500 rounded-tr-xl"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Border Accent */}
              <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent"></div>
            </div>
          </section>

          <section className="bg-gold/50 py-24 px-6 transition-colors duration-300 rounded-[40px]">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50">
                  Project <span className="text-amber-500">Goals</span>
                </h2>
              </div>

              {/* Carousel Area */}
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-4 py-6 px-2">
                  {goals.map((goal, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="h-full border border-white/20 bg-gold/50 shadow-xl rounded-[32px] overflow-hidden group ring-2 ring-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gold/70">
                        <CardContent className="p-10 flex flex-col h-full">
                          {/* Check Icon */}
                          <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white shadow-lg shadow-gold/20">
                            <Check size={20} strokeWidth={3} />
                          </div>

                          {/* Content */}
                          <h3 className="text-2xl font-bold text-white/80 mb-4 group-hover:text-white transition-colors">
                            {goal.title}
                          </h3>
                          <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors">
                            {goal.description}
                          </p>

                          {/* Bottom Gradient Accent (Subtle) */}
                          <div className="mt-auto pt-8">
                            <div className="h-1 w-12 bg-amber-500/30 rounded-full group-hover:w-full transition-all duration-500"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Chat Button (Visual Only as per screenshot) */}
              {/* <div className="fixed bottom-6 right-6 z-50">
              <button className="flex items-center gap-2 bg-zinc-900 dark:bg-amber-500 text-zinc-50 dark:text-zinc-950 px-6 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                Chat with us
              </button>
            </div> */}
            </div>
          </section>
        </div>

        <section className="relative py-24 px-6 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
          {/* Background Image Overlay (Subtle) */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
            <img
              src="/images/services/database.png"
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full relative z-10">
            {/* Header */}
            <div className="text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">
                Our Strategy
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50">
                Our Solution
              </h2>
            </div>

            {/* Phases Container */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-end gap-4 min-h-[400px]">
              {phases.map((phase) => {
                const isActive = activePhase === phase.id;

                return (
                  <div
                    key={phase.id}
                    onMouseEnter={() => setActivePhase(phase.id)}
                    onMouseLeave={() => setActivePhase(null)}
                    className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-[24px] overflow-hidden border-2 h-[300px]
                  ${
                    isActive
                      ? "w-full lg:w-[400px] bg-gold/50 border-gold dark:border-gold p-8 shadow-2xl"
                      : "w-20 lg:w-[200px] bg-transparent border-gold flex flex-col items-center justify-end pb-8 hover:border-amber-200/80"
                  }`}
                  >
                    {isActive ? (
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {phase.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">
                          {phase.description}
                        </p>
                      </div>
                    ) : (
                      <span className="text-3xl font-black text-gold">
                        {phase.id}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-24 px-6 lg:mt-10 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 mb-6">
              Core Technologies &{" "}
              <span className="text-amber-500">Services</span>
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
              We select the best tools for the job, focusing on modern,
              scalable, and secure technologies to build solutions that perform
              and last.
            </p>

            {/* Tags/Badges Container */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full border-2 border-zinc-200 dark:border-zinc-800 
                         bg-zinc-100/50 dark:bg-zinc-900/50 text-zinc-800 dark:text-zinc-200 
                         font-bold text-sm md:text-base transition-all duration-300
                         hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-500 
                         hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-24 px-6 transition-colors duration-300">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Text and Stats Grid */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 mb-6">
                Results & <span className="text-amber-500">Impact</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl">
                The new platform delivered significant improvements in user
                engagement and operational efficiency, setting a new benchmark
                in the industry.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-5xl md:text-6xl font-black text-amber-500 dark:text-amber-500 mb-3">
                      {stat.value}
                    </span>
                    <span className="text-sm md:text-base font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image with Shadow Effect */}
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-amber-500/10 dark:bg-amber-500/5 rounded-[40px] blur-2xl group-hover:opacity-100 transition-opacity"></div>

              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-zinc-100 dark:border-zinc-800 h-[500px]">
                {/* <img
                src="/images/services/database.png"
                alt="Team working on results"
                className="w-full h-full object-cover aspect-video lg:aspect-square"
              /> */}
                <video
                  src="/images/services/salon/video1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for image consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            {/* Quote Card */}
            <div className="relative overflow-hidden rounded-[40px] bg-gold/50 border border-zinc-100 dark:border-zinc-800 p-10 md:px-20 md:py-15 text-center shadow-sm">
              {/* Top Logo Area */}
              <div className="flex justify-center mb-10">
                <div className="flex items-center gap-2">
                  {/* Gold Accent Icon */}
                  <div className="h-10 w-10 bg-amber-500 rounded-lg flex items-center justify-center text-zinc-950 font-black text-xl">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div className="text-left">
                    <span className="text-foreground font-bold">
                      DART<span className="text-gold">CODES</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="relative z-10">
                <p className="text-2xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-200 leading-tight md:leading-snug italic italic">
                  "Working with DartCode was a game-changer for our business.
                  They successfully transformed our manual salon operations from
                  1984 into a modern, automated system. The team's expertise in
                  digitizing our workflows, from service tracking to financial
                  reporting, has saved us countless hours of manual work. We are
                  highly impressed with the intuitive interface and the seamless
                  integration of our daily tasks. DartCode delivered a
                  professional solution that perfectly fits our needs, and we
                  highly recommend their services."
                </p>

                {/* Author */}
                <footer className="mt-10">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-8 bg-amber-500"></div>
                    <p className="text-lg font-bold text-amber-600 dark:text-amber-500">
                      Central Salon Management Team
                    </p>
                    <div className="h-px w-8 bg-amber-500"></div>
                  </div>
                </footer>
              </blockquote>

              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-amber-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 bg-amber-500/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-24 px-6 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[40px] bg-zinc-900 dark:bg-zinc-900 shadow-2xl border border-zinc-800">
              {/* Animated Background Pattern (Gold accent) */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* Decorative Glows */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]"></div>

              <div className="relative z-10 p-12 md:p-24 text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                  Ready to build your <br className="hidden md:block" />
                  <span className="text-amber-500">idea?</span>
                </h2>

                {/* Subtext */}
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                  Let's create something remarkable together. We are ready to
                  help you achieve your business goals.
                </p>

                {/* Action Button */}
                <Button
                  size="lg"
                  className="bg-white hover:bg-zinc-200 text-zinc-950 font-bold py-8 px-10 rounded-full text-xl group transition-all duration-300 hover:scale-105"
                >
                  Get in touch
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-zinc-50 dark:bg-zinc-900/30 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-50">
                  Explore Other Case Studies
                </h2>
                <button className="text-amber-600 dark:text-amber-500 font-bold mt-2 hover:underline">
                  View all →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherProjects.map((project, i) => (
                <div
                  key={i}
                  className="group bg-white dark:bg-zinc-900 rounded-[32px] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.img}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-50 mt-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    <button className="text-zinc-900 dark:text-zinc-50 font-bold mt-6 text-sm flex items-center gap-2 group-hover:text-amber-500">
                      View Project{" "}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </div>
  );
}
