"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "moodmate-home",
    src: "/assets/projects/moodmate/01-home.png",
    alt: "Moodmate — AI-powered mood tracking home screen",
    title: "Moodmate",
    category: "Mobile App",
  },
  {
    id: "aquavet-diagnosis",
    src: "/assets/projects/aquavet/01-diagnosis.png",
    alt: "AquaVet — Fish disease diagnosis interface",
    title: "AquaVet",
    category: "Mobile App",
  },
  {
    id: "tourism-landing",
    src: "/assets/projects/tourism/01-landing.png",
    alt: "Tourism Management — Landing page",
    title: "Tourism Platform",
    category: "Web App",
  },
  {
    id: "ecommerce-meal",
    src: "/assets/projects/ecommerce/01-meal-dish-shop.png",
    alt: "Meal Dish Shop — E-commerce storefront",
    title: "Meal Dish Shop",
    category: "Web App",
  },
];

const categories = ["All", ...Array.from(new Set(galleryItems.map((i) => i.category)))];

export default function GlassGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  return (
    <section id="gallery" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full mb-6" />
          <p className="text-text-secondary text-base mb-8 max-w-xl">
            A visual showcase of my work — click any card to view full-screen.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-neon-cyan/15 text-neon-cyan border-neon-cyan/40 glow-cyan"
                  : "bg-bg-elevated/60 text-text-secondary border-white/5 hover:border-neon-cyan/20 hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setSelectedItem(item)}
                  className="group relative w-full rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
                  aria-label={`View ${item.title}`}
                >
                  {/* Glass card wrapper */}
                  <div className="glass rounded-2xl overflow-hidden transition-all duration-400 group-hover:border-neon-cyan/30 group-hover:shadow-[0_0_30px_rgba(45,226,230,0.12)]">
                    {/* Image */}
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Hover glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <div>
                          <p className="text-text-primary font-semibold text-base font-[family-name:var(--font-display)]">
                            {item.title}
                          </p>
                          <p className="text-neon-cyan text-xs mt-1">
                            {item.category}
                          </p>
                        </div>

                        {/* Expand icon */}
                        <div className="ml-auto w-9 h-9 rounded-full glass flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-neon-cyan"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom info bar */}
                    <div className="px-4 py-3 flex items-center justify-between">
                      <span className="text-text-primary text-sm font-medium truncate">
                        {item.title}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full border border-neon-cyan/20 text-neon-cyan/70 bg-neon-cyan/5 shrink-0 ml-2">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ─── Lightbox Modal ─── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedItem(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-bg-base/85 backdrop-blur-xl" />

            {/* Content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-5xl w-full glass rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-neon-cyan transition-colors duration-200"
                aria-label="Close lightbox"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full aspect-video">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain bg-bg-base"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              </div>

              {/* Info bar */}
              <div className="px-6 py-4 flex items-center justify-between border-t border-neon-cyan/10">
                <div>
                  <h3 className="text-text-primary font-semibold text-lg font-[family-name:var(--font-display)]">
                    {selectedItem.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-0.5">
                    {selectedItem.alt}
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full border border-neon-violet/25 text-neon-violet bg-neon-violet/5 shrink-0 ml-4">
                  {selectedItem.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
