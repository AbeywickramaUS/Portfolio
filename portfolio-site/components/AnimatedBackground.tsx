"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const initParticles = useCallback((width: number, height: number) => {
    const isMobile = width < 768;
    const count = isMobile ? 30 : 60;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const isCyan = Math.random() > 0.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: isCyan ? "#2DE2E6" : "#A855F7",
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    particlesRef.current = particles;
  }, []);

  const drawGrid = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = "rgba(45, 226, 230, 0.03)";
    ctx.lineWidth = 0.5;
    const gridSize = 60;

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }, []);

  const drawGradientMesh = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const pulse = Math.sin(time * 0.0005) * 0.5 + 0.5;

    // Top-left cyan glow
    const g1 = ctx.createRadialGradient(0, 0, 0, 0, 0, width * 0.4);
    g1.addColorStop(0, `rgba(45, 226, 230, ${0.04 + pulse * 0.02})`);
    g1.addColorStop(1, "rgba(45, 226, 230, 0)");
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, width, height);

    // Bottom-right violet glow
    const g2 = ctx.createRadialGradient(width, height, 0, width, height, width * 0.4);
    g2.addColorStop(0, `rgba(168, 85, 247, ${0.04 + (1 - pulse) * 0.02})`);
    g2.addColorStop(1, "rgba(168, 85, 247, 0)");
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, width, height);

    // Center magenta glow (subtle)
    const g3 = ctx.createRadialGradient(width * 0.5, height * 0.3, 0, width * 0.5, height * 0.3, width * 0.25);
    g3.addColorStop(0, `rgba(255, 46, 151, ${0.015 + pulse * 0.01})`);
    g3.addColorStop(1, "rgba(255, 46, 151, 0)");
    ctx.fillStyle = g3;
    ctx.fillRect(0, 0, width, height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      drawGrid(ctx, canvas.width, canvas.height);

      // Draw gradient mesh
      drawGradientMesh(ctx, canvas.width, canvas.height, time);

      const particles = particlesRef.current;
      const connectionDistance = canvas.width < 768 ? 100 : 150;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse interaction - gentle repulsion
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        // Limit velocity
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.6) {
          p.vx = (p.vx / speed) * 0.6;
          p.vy = (p.vy / speed) * 0.6;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", `, ${p.opacity})`).replace("rgb", "rgba").replace("#2DE2E6", "rgba(45,226,230").replace("#A855F7", "rgba(168,85,247");
        
        // Proper rgba conversion
        if (p.color === "#2DE2E6") {
          ctx.fillStyle = `rgba(45, 226, 230, ${p.opacity})`;
          ctx.shadowColor = "rgba(45, 226, 230, 0.5)";
        } else {
          ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`;
          ctx.shadowColor = "rgba(168, 85, 247, 0.5)";
        }
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDistance) {
            const alpha = (1 - cdist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(45, 226, 230, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [initParticles, drawGrid, drawGradientMesh]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />
      {/* Static gradient fallback for prefers-reduced-motion */}
      <div
        className="static-gradient-fallback fixed inset-0 z-0 pointer-events-none hidden"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(45,226,230,0.06) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(168,85,247,0.06) 0%, transparent 50%), var(--bg-base)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
