"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
            <span className="gradient-text">Experience</span> & Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center neumorph text-lg">
                💼
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                Work Experience
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-neon-cyan/20">
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-neon-cyan glow-cyan" />
              <GlassCard className="p-6 mb-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                    2024 — 2025
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">
                  Software Engineer
                </h4>
                <p className="text-neon-violet text-sm font-medium mb-3">
                  Gamage Recruiters (Pvt) Ltd, Panadura
                </p>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex gap-2">
                    <span className="text-neon-cyan mt-1 shrink-0">▸</span>
                    Developed and optimized backend systems using the MERN
                    stack, directly contributing to core platform functionality.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neon-cyan mt-1 shrink-0">▸</span>
                    Maintained strict code quality and took part in code reviews.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neon-cyan mt-1 shrink-0">▸</span>
                    Debugged and resolved software issues efficiently to keep the
                    platform stable.
                  </li>
                </ul>
              </GlassCard>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center neumorph text-lg">
                🎓
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)] text-text-primary">
                Education
              </h3>
            </div>

            <div className="relative pl-8 border-l-2 border-neon-violet/20">
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-neon-violet glow-violet" />
              <GlassCard className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-neon-violet/10 text-neon-violet border border-neon-violet/20">
                    May 2021 — Present
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">
                  BSc (Hons) in Information Technology
                </h4>
                <p className="text-neon-cyan text-sm font-medium mb-3">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
                <p className="text-text-secondary text-sm">
                  Comprehensive program covering full-stack development,
                  software engineering, mobile app development, AI/ML, and
                  database management.
                </p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
