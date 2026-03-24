"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Ripple } from "m3-ripple";
import { ArrowLeft, ExternalLink, Calendar, Code, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ProjectContent() {
  const params = useParams();
  const router = useRouter();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";

  // Derive project directly from params
  const projectIndex = projects.findIndex((p) => p.id === params.id);
  const project = projectIndex !== -1 ? projects[projectIndex] : undefined;
  const nextProject = projectIndex !== -1 ? projects[(projectIndex + 1) % projects.length] : undefined;

  // Redirect if not found
  useEffect(() => {
    if (!project && params.id) {
      router.push("/work");
    }
  }, [project, params.id, router]);

  if (!project) return <div className="min-h-screen bg-background" />;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* --- Hero / Header --- */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-end pb-12">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover ${currentTheme === "light" ? "opacity-20" : "opacity-40"} blur-sm scale-110`}
              priority
            />
            <div className={`absolute inset-0 ${currentTheme === "light" ? "bg-linear-to-t from-background via-background/80 to-transparent" : "bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"}`} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/work"
                className="inline-flex items-center text-foreground/60 hover:text-gold transition-colors mb-6 group"
              >
                <ArrowLeft
                  size={20}
                  className="mr-2 group-hover:-translate-x-1 transition-transform"
                />
                Back to Work
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium border border-gold/20">
                  {project.category}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-foreground/5 text-foreground/60 rounded-full text-sm border border-foreground/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Main Content --- */}
        <Section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10"
                >
                  <h3 className="text-xl font-bold mb-3 text-gold flex items-center gap-2">
                    <Layers size={20} />
                    The Challenge
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {project.challenge ||
                      "To build a scalable and robust solution that meets high enterprise standards while maintaining ease of use."}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10"
                >
                  <h3 className="text-xl font-bold mb-3 text-gold flex items-center gap-2">
                    <Code size={20} />
                    The Solution
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {project.solution ||
                      "We implemented a modern architecture using cutting-edge technologies to ensure performance, security, and scalability."}
                  </p>
                </motion.div>
              </div>

              {/* Image Gallery (Placeholder for now) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-96 w-full rounded-3xl overflow-hidden border border-foreground/10"
              >
                <Image
                  src={project.image}
                  alt="Project screenshot"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-foreground/2 border border-foreground/10 rounded-3xl p-8 sticky top-32"
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">Project Details</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 text-gold">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1">
                        Timeline
                      </p>
                      <p className="font-medium text-foreground">3 Months</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 text-gold">
                      <Code size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1">
                        Stack
                      </p>
                      <p className="font-medium text-foreground">{project.tags.join(", ")}</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-foreground/10 my-8" />

                <Button
                  className="w-full bg-gold text-black font-bold h-12 rounded-xl hover:bg-gold/90"
                  onPress={() => window.open(project.link, "_blank")}
                >
                  <Ripple />
                  <ExternalLink size={18} className="mr-2" />
                  Visit Live Site
                </Button>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* --- Next Project CTA --- */}
        {nextProject && (
          <section className="py-20 border-t border-foreground/5 bg-foreground/2">
            <div className="container mx-auto px-6 text-center flex flex-col items-center">
              <p className="text-foreground/40 mb-4 uppercase tracking-widest text-xs">
                Next Project
              </p>
              <Link href={`/work/${nextProject.id}`}>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 hover:text-gold transition-colors cursor-pointer text-foreground">
                  {nextProject.title}
                </h2>
              </Link>
              <Link href={`/work/${nextProject.id}`}>
                <Button
                  variant="outline"
                  className="text-foreground border-foreground/20 hover:bg-foreground/5 h-12 px-8 rounded-full hover:border-foreground/50"
                >
                  <Ripple />
                  View Project
                </Button>
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
