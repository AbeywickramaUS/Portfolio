"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

export default function ContactPanel() {
  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full mb-6 mx-auto" />
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            I am open to internship opportunities in Information Technology.
            Let&apos;s connect and build something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-8 md:p-10">
            {/* Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {/* Email */}
              <a
                href="mailto:umeshashehani23@gmail.com"
                className="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-neon-cyan/5"
              >
                <div className="w-14 h-14 rounded-xl neumorph flex items-center justify-center text-neon-cyan group-hover:glow-cyan transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-primary text-sm font-medium">Email</p>
                  <p className="text-text-secondary text-xs">
                    umeshashehani23@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/umesha-abeywickrama-759333218/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-neon-cyan/5"
              >
                <div className="w-14 h-14 rounded-xl neumorph flex items-center justify-center text-neon-cyan group-hover:glow-cyan transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-primary text-sm font-medium">LinkedIn</p>
                  <p className="text-text-secondary text-xs">linkedin.com/in/umesha-abeywickrama</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AbeywickramaUS"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-neon-cyan/5"
              >
                <div className="w-14 h-14 rounded-xl neumorph flex items-center justify-center text-neon-cyan group-hover:glow-cyan transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-primary text-sm font-medium">GitHub</p>
                  <p className="text-text-secondary text-xs">
                    github.com/AbeywickramaUS
                  </p>
                </div>
              </a>
            </div>

            {/* Resume Download */}
            <motion.a
              href="/assets/Umesha_Abeywickrama_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl neumorph text-neon-cyan font-semibold text-sm transition-all duration-300 hover:glow-cyan"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </motion.a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
