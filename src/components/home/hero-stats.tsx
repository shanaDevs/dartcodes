"use client";

import { motion } from "framer-motion";
import { Binary, Clock, Database, Globe, Headset, MessageCircle, Rocket, Server, ShieldCheck, User } from "lucide-react";

const heroStats = [
  { icon: Clock, label: "Strategy", value: "10+", desc: "Strategic-first approach, not just development" },
  { icon: Rocket, label: "Scalability", value: "100+", desc: "Scalable architecture built for growth" },
  { icon: MessageCircle, label: "Transparency", value: "100%", desc: "Transparent communication & structured processes" },
  { icon: Headset, label: "Support", value: "100%", desc: "Dedicated support beyond project delivery" },
  { icon: User, label: "Experience", value: "10+", desc: "Experience across diverse industries" },
];

export function HeroStats() {
  return (
    <section className="relative py-24 -mt-40">
      <div className="max-w-8xl mx-auto px-6 flex items-center justify-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-5 gap-8">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 220,
                damping: 20,
              }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 4, rotateY: -4 }}
              whileTap={{ scale: 0.97, rotateX: 0, rotateY: 0 }}
              style={{ transformPerspective: 1200 }}
              className="flex flex-col items-center justify-center group p-8 rounded-[2.5rem] bg-white/60 dark:bg-white/5 backdrop-blur-3xl border border-white/15 dark:border-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.55)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.85)] hover:border-gold/40 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-500 text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-gold to-gold/50 text-white flex items-center justify-center mb-6 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all">
                <stat.icon size={28} />
              </div>
              <div className="text-xs text-foreground/70 uppercase tracking-[0.2em] font-bold mb-1">
                {stat.label}
              </div>
              <div className="text-2xl font-black text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/70 text-center">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

