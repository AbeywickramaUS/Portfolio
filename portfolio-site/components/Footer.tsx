export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-neon-cyan/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          © {year}{" "}
          <span className="text-text-primary font-medium">
            Umesha Shehani Abeywickrama
          </span>
          . All rights reserved.
        </p>
        <p className="text-text-secondary text-xs">
          Built with{" "}
          <span className="text-neon-cyan">Next.js</span>
          {" "}&{" "}
          <span className="text-neon-violet">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
