"use client";

import { motion } from "framer-motion";
import NeumorphicChip from "./NeumorphicChip";

const skillCategories = [
  {
    title: "Languages",
    icon: "⚡",
    skills: ["C", "C++", "Python", "Java", "HTML", "CSS", "PHP", "SQL", "TypeScript", "Dart"],
  },
  {
    title: "Frameworks & Runtimes",
    icon: "🔧",
    skills: ["React JS", "React Native", "Node.js", "Flutter", "Express", "MERN"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "SQL"],
  },
  {
    title: "UI/UX Design Intelligence",
    icon: "🎨",
    skills: [
      "Glassmorphism",
      "Neumorphism",
      "Minimalism",
      "Bento Grid",
      "Dark Mode Systems",
      "WCAG Accessibility",
      "Mobile-First Layout",
      "Semantic Color Systems",
      "Purposeful Animation",
      "Forms & Feedback",
    ],
  },
];

const tools = [
  { name: "Google Antigravity IDE", primary: true },
  { name: "VS Code", primary: false },
  { name: "Git & GitHub", primary: false },
  { name: "Postman", primary: false },
  { name: "Figma", primary: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full mb-10" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary mb-4 flex items-center gap-2">
                <span className="text-xl">{category.icon}</span>
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill} variants={chipVariants}>
                    <NeumorphicChip>{skill}</NeumorphicChip>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tools & IDEs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary mb-4 flex items-center gap-2">
            <span className="text-xl">🛠️</span>
            Tools & Development Environments
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {tools.map((tool) => (
              <motion.div key={tool.name} variants={chipVariants}>
                <NeumorphicChip glowCyan={tool.primary}>
                  {tool.primary && (
                    <span className="mr-2 text-base">✦</span>
                  )}
                  {tool.name}
                  {tool.primary && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider opacity-70">
                      Primary
                    </span>
                  )}
                </NeumorphicChip>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
