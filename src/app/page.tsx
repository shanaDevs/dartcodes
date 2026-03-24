import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { HeroStats } from "@/components/home/hero-stats";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { Industries } from "@/components/home/industries";
import { Stats } from "@/components/home/stats";
import { Contact } from "@/components/home/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DartCodes | Digital Agency",
  description:
    "Comprehensive digital solutions tailored to elevate your business. From concept to code, we deliver excellence.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Stats />
        <Process />
        <Industries />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
