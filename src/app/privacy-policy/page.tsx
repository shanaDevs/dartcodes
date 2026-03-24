"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PrivacyPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* --- Hero Section --- */}
        <section className="relative py-20 px-6 text-center overflow-hidden mb-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/imgs/heros/hero_privacy.jpeg"
              alt="Data privacy and security"
              fill
              className={`object-cover ${currentTheme === "light" ? "opacity-20" : "opacity-30"}`}
              priority
            />
            <div className={`absolute inset-0 ${currentTheme === "light" ? "bg-linear-to-b from-background/90 via-background/70 to-background" : "bg-linear-to-b from-black/80 via-black/50 to-[#0a0a0a]"}`} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-xl text-foreground/60">
              We value your trust and are committed to protecting your personal
              information.
            </p>
          </div>
        </section>

        <Section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-foreground/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us, such as
                when you fill out a contact form, subscribe to our newsletter,
                or communicate with us.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company details</li>
                <li>Project requirements and messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to comply
                with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to track the
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Third-Party Services
              </h2>
              <p>
                We may employ third-party companies and individuals to
                facilitate our service ("Service Providers"), to provide the
                Service on our behalf, to perform Service-related services, or
                to assist us in analyzing how our Service is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Contact us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
                <a
                  href="mailto:hello@dartcodes.com"
                  className="text-gold hover:underline"
                >
                  hello@dartcodes.com
                </a>
              </p>
            </section>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
