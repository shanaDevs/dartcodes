"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TermsPage() {
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
        <Section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Terms of <span className="text-gold">Service</span>
            </h1>
            <div className="space-y-8 text-foreground/70 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using the DartCodes website and services, you
                  agree to be bound by these Terms of Service. If you do not
                  agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Services
                </h2>
                <p>
                  DartCodes provides digital agency services including but not
                  limited to web development, mobile application development,
                  UI/UX design, and consulting. We reserve the right to modify
                  or discontinue any service at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Intellectual Property
                </h2>
                <p>
                  All content, branding, and original code produced by DartCodes
                  remains our intellectual property until full payment is
                  received and rights are transferred according to our service
                  agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Client Responsibilities
                </h2>
                <p>
                  Clients are responsible for providing necessary assets,
                  feedback, and approvals in a timely manner. Delays caused by
                  the client may affect project timelines.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Limitation of Liability
                </h2>
                <p>
                  DartCodes shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from
                  your use of or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Governing Law
                </h2>
                <p>
                  These terms shall be governed by and construed in accordance
                  with the laws of Sri Lanka, without regard to its conflict of
                  law provisions.
                </p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
