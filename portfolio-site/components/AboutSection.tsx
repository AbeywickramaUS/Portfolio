"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "./GlassCard";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden gradient-border">
              <Image
                src="/assets/profile/profile photo.jpeg"
                alt="Umesha Shehani Abeywickrama"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                A responsible, straightforward, and dedicated undergraduate
                seeking an internship in Information Technology. I treat
                challenges as opportunities and believe in working smart to get
                things done.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                I am currently pursuing a{" "}
                <span className="text-text-primary font-semibold">
                  BSc (Hons) in Information Technology
                </span>{" "}
                at the{" "}
                <span className="text-neon-cyan">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </span>
                , from May 2021 to present. My work spans full-stack web
                development, cross-platform mobile apps, and AI-assisted product
                design.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "5+", label: "Projects" },
                  { number: "1+", label: "Years Exp" },
                  { number: "10+", label: "Tech Skills" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center neumorph rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-text-secondary text-xs mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
