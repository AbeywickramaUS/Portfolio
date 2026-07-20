"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "./GlassCard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  span: string; // grid column span class
}

const projects: Project[] = [
  {
    title: "Moodmate",
    description:
      "A context-aware Flutter mobile app powered by explainable AI. Reads user context and gives transparent, reasoned suggestions. Features a deeply customized user-preference UI with a dedicated allergy-adding text box.",
    tech: ["Flutter", "Dart", "Explainable AI", "REST APIs"],
    image: "/assets/projects/moodmate/01-home.png",
    imageAlt: "Moodmate mood tracking app with AI suggestions",
    span: "md:col-span-2 md:row-span-2",
  },

  {
    title: "AquaVet",
    description:
      "A cross-platform React Native app with a robust Python backend to diagnose fish diseases and manage aquarium environments.",
    tech: ["React Native", "Python", "REST APIs"],
    image: "/assets/projects/aquavet/01-diagnosis.png",
    imageAlt: "AquaVet fish disease diagnosis app",
    span: "md:col-span-1",
  },
  {
    title: "Tourism Management",
    description:
      "A full-stack MERN platform for tourism management with backend optimization and secure JWT-based user authentication.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    image: "/assets/projects/tourism/01-landing.png",
    imageAlt: "Tourism management platform",
    span: "md:col-span-1",
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Meal Dish Shop & Bookwarm — full-stack MERN and Java e-commerce builds with backend optimization and secure authentication.",
    tech: ["MERN", "Java", "Secure Auth"],
    image: "/assets/projects/ecommerce/01-meal-dish-shop.png",
    imageAlt: "Meal Dish Shop and Bookwarm e-commerce platforms",
    span: "md:col-span-2",
  },
];

export default function ProjectBento() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full mb-10" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={project.span}
            >
              <GlassCard
                className="h-full group cursor-pointer overflow-hidden"
                id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-text-primary mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-neon-cyan/20 text-neon-cyan/80 bg-neon-cyan/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
