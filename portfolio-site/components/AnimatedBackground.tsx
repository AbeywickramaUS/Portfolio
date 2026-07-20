"use client";

import { useEffect, useRef, useCallback } from "react";

/* ───────────────────────── Types ───────────────────────── */

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string; // hex
}

interface TunnelRing {
  z: number;
}

type GlyphShape = "hexagon" | "gear" | "diamond" | "triangle" | "terminal" | "node" | "bracket" | "circuit";

interface CodeGlyph {
  x: number;
  y: number;
  z: number;
  shape: GlyphShape;
  rotSpeed: number;
  rot: number;
  color: string;
  size: number;
}

/* ───────────────────────── Constants ───────────────────────── */

const COLORS = {
  cyan: "#2DE2E6",
  violet: "#A855F7",
  magenta: "#FF2E97",
  cyanRGB: "45,226,230",
  violetRGB: "168,85,247",
  magentaRGB: "255,46,151",
};

const STAR_COUNT_DESKTOP = 500;
const STAR_COUNT_MOBILE = 250;
const TUNNEL_RING_SPACING = 600;
const TUNNEL_RING_COUNT = 20;
const GLYPH_COUNT = 14;
const GLYPH_SHAPES: GlyphShape[] = ["hexagon", "gear", "diamond", "triangle", "terminal", "node", "bracket", "circuit"];
const TUNNEL_HALF_W = 900;
const TUNNEL_HALF_H = 600;
const FOCAL_LENGTH = 400;
const FAR_PLANE = 12000;
const NEAR_PLANE = 1;
const AUTO_DRIFT_SPEED = 0.35; // px per frame at 60fps
const SCROLL_SENSITIVITY = 1.8;

/* ───────────────────────── Helpers ───────────────────────── */

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createStar(zMin: number, zMax: number): Star {
  return {
    x: randomRange(-TUNNEL_HALF_W, TUNNEL_HALF_W),
    y: randomRange(-TUNNEL_HALF_H, TUNNEL_HALF_H),
    z: randomRange(zMin, zMax),
    radius: randomRange(0.8, 2.5),
    color: Math.random() > 0.4 ? COLORS.cyan : Math.random() > 0.5 ? COLORS.violet : COLORS.magenta,
  };
}

function createGlyph(zMin: number, zMax: number): CodeGlyph {
  return {
    x: randomRange(-TUNNEL_HALF_W * 0.7, TUNNEL_HALF_W * 0.7),
    y: randomRange(-TUNNEL_HALF_H * 0.7, TUNNEL_HALF_H * 0.7),
    z: randomRange(zMin, zMax),
    shape: GLYPH_SHAPES[Math.floor(Math.random() * GLYPH_SHAPES.length)],
    rotSpeed: randomRange(-0.008, 0.008),
    rot: randomRange(0, Math.PI * 2),
    color: Math.random() > 0.5 ? COLORS.violet : COLORS.cyan,
    size: randomRange(3, 6),
  };
}

/* ── Shape drawing helpers ── */

function drawHexagon(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
}

function drawGear(ctx: CanvasRenderingContext2D, r: number) {
  const teeth = 6;
  const inner = r * 0.6;
  ctx.beginPath();
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (Math.PI / teeth) * i;
    const radius = i % 2 === 0 ? r : inner;
    const px = Math.cos(angle) * radius;
    const py = Math.sin(angle) * radius;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
  // Center dot
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
  ctx.stroke();
}

function drawDiamond(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.7, 0);
  ctx.lineTo(0, r);
  ctx.lineTo(-r * 0.7, 0);
  ctx.closePath();
  ctx.stroke();
}

function drawTriangle(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 3; i++) {
    const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
}

function drawTerminal(ctx: CanvasRenderingContext2D, r: number) {
  // Terminal window outline
  const w = r * 1.3;
  const h = r;
  ctx.strokeRect(-w, -h, w * 2, h * 2);
  // Prompt line
  ctx.beginPath();
  ctx.moveTo(-w * 0.6, h * 0.3);
  ctx.lineTo(-w * 0.2, 0);
  ctx.lineTo(-w * 0.6, -h * 0.3);
  ctx.stroke();
  // Cursor line
  ctx.beginPath();
  ctx.moveTo(-w * 0.1, h * 0.3);
  ctx.lineTo(w * 0.5, h * 0.3);
  ctx.stroke();
}

function drawNode(ctx: CanvasRenderingContext2D, r: number) {
  // Center circle
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2);
  ctx.stroke();
  // Connection lines radiating out
  for (let i = 0; i < 3; i++) {
    const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
    const ex = Math.cos(angle) * r;
    const ey = Math.sin(angle) * r;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * r * 0.35, Math.sin(angle) * r * 0.35);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    // Endpoint dot
    ctx.beginPath();
    ctx.arc(ex, ey, r * 0.15, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawBracket(ctx: CanvasRenderingContext2D, r: number) {
  // < >
  ctx.beginPath();
  ctx.moveTo(-r * 0.3, -r * 0.6);
  ctx.lineTo(-r, 0);
  ctx.lineTo(-r * 0.3, r * 0.6);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(r * 0.3, -r * 0.6);
  ctx.lineTo(r, 0);
  ctx.lineTo(r * 0.3, r * 0.6);
  ctx.stroke();
}

function drawCircuit(ctx: CanvasRenderingContext2D, r: number) {
  // Small circuit-board trace pattern
  ctx.beginPath();
  ctx.moveTo(-r, 0);
  ctx.lineTo(-r * 0.3, 0);
  ctx.lineTo(0, -r * 0.5);
  ctx.lineTo(r * 0.3, 0);
  ctx.lineTo(r, 0);
  ctx.stroke();
  // Node dots
  ctx.beginPath();
  ctx.arc(-r, 0, r * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(r, 0, r * 0.12, 0, Math.PI * 2);
  ctx.fill();
}

function drawGlyphShape(ctx: CanvasRenderingContext2D, shape: GlyphShape, r: number) {
  switch (shape) {
    case "hexagon": drawHexagon(ctx, r); break;
    case "gear": drawGear(ctx, r); break;
    case "diamond": drawDiamond(ctx, r); break;
    case "triangle": drawTriangle(ctx, r); break;
    case "terminal": drawTerminal(ctx, r); break;
    case "node": drawNode(ctx, r); break;
    case "bracket": drawBracket(ctx, r); break;
    case "circuit": drawCircuit(ctx, r); break;
  }
}

/* ───────────────────────── Component ───────────────────────── */

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Camera state
  const cameraRef = useRef({
    z: 0,
    targetZ: 0,
    tiltX: 0,
    tiltY: 0,
    targetTiltX: 0,
    targetTiltY: 0,
  });

  // Scene objects
  const starsRef = useRef<Star[]>([]);
  const ringsRef = useRef<TunnelRing[]>([]);
  const glyphsRef = useRef<CodeGlyph[]>([]);
  const lastScrollRef = useRef(0);

  /* ── Initialise scene ── */
  const initScene = useCallback((width: number) => {
    const isMobile = width < 768;
    const starCount = isMobile ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP;

    // Stars spread far ahead
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(createStar(0, FAR_PLANE));
    }
    starsRef.current = stars;

    // Tunnel rings
    const rings: TunnelRing[] = [];
    for (let i = 0; i < TUNNEL_RING_COUNT; i++) {
      rings.push({ z: i * TUNNEL_RING_SPACING });
    }
    ringsRef.current = rings;

    // Floating code glyphs
    const glyphs: CodeGlyph[] = [];
    for (let i = 0; i < GLYPH_COUNT; i++) {
      glyphs.push(createGlyph(0, FAR_PLANE));
    }
    glyphsRef.current = glyphs;
  }, []);

  /* ── Project 3D → 2D ── */
  const project = useCallback(
    (
      x: number,
      y: number,
      z: number,
      camZ: number,
      camTiltX: number,
      camTiltY: number,
      cx: number,
      cy: number
    ): { sx: number; sy: number; scale: number } | null => {
      const rz = z - camZ;
      if (rz < NEAR_PLANE || rz > FAR_PLANE) return null;
      const scale = FOCAL_LENGTH / rz;
      const sx = (x - camTiltX) * scale + cx;
      const sy = (y - camTiltY) * scale + cy;
      return { sx, sy, scale };
    },
    []
  );

  /* ── Main effect ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initScene(canvas.width);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalise to -1..1
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollRef.current;
      lastScrollRef.current = scrollY;
      cameraRef.current.targetZ += delta * SCROLL_SENSITIVITY;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    /* ── Render loop ── */
    const animate = (_time: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const cam = cameraRef.current;

      // Auto-drift forward
      cam.targetZ += AUTO_DRIFT_SPEED;

      // Smooth camera interpolation
      cam.z += (cam.targetZ - cam.z) * 0.06;

      // Mouse → parallax tilt
      cam.targetTiltX = mouseRef.current.x * 120;
      cam.targetTiltY = mouseRef.current.y * 80;
      cam.tiltX += (cam.targetTiltX - cam.tiltX) * 0.04;
      cam.tiltY += (cam.targetTiltY - cam.tiltY) * 0.04;

      // Clear
      ctx.fillStyle = "#0A0A0F";
      ctx.fillRect(0, 0, w, h);

      // ── Radial depth fog overlay ──
      const fogGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.6);
      fogGrad.addColorStop(0, "rgba(10,10,15,0)");
      fogGrad.addColorStop(0.7, "rgba(10,10,15,0)");
      fogGrad.addColorStop(1, "rgba(10,10,15,0.7)");
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, 0, w, h);

      // ── Draw tunnel rings ──
      const rings = ringsRef.current;
      for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        let rz = ring.z - cam.z;

        // Recycle rings that pass behind camera
        while (rz < -TUNNEL_RING_SPACING) {
          ring.z += TUNNEL_RING_COUNT * TUNNEL_RING_SPACING;
          rz = ring.z - cam.z;
        }

        if (rz < NEAR_PLANE || rz > FAR_PLANE) continue;

        const scale = FOCAL_LENGTH / rz;
        const halfW = TUNNEL_HALF_W * scale;
        const halfH = TUNNEL_HALF_H * scale;
        const rx = cx - cam.tiltX * scale;
        const ry = cy - cam.tiltY * scale;

        // Depth-based opacity (close = brighter, far = dimmer)
        const depthNorm = 1 - rz / FAR_PLANE;
        const alpha = Math.max(0, depthNorm * 0.12);

        ctx.strokeStyle = `rgba(${COLORS.cyanRGB}, ${alpha})`;
        ctx.lineWidth = Math.max(0.5, scale * 2);
        ctx.strokeRect(rx - halfW, ry - halfH, halfW * 2, halfH * 2);

        // Cross-hairs on ring (subtle)
        const crossAlpha = alpha * 0.4;
        ctx.strokeStyle = `rgba(${COLORS.cyanRGB}, ${crossAlpha})`;
        ctx.lineWidth = Math.max(0.3, scale);
        ctx.beginPath();
        ctx.moveTo(rx - halfW, ry);
        ctx.lineTo(rx + halfW, ry);
        ctx.moveTo(rx, ry - halfH);
        ctx.lineTo(rx, ry + halfH);
        ctx.stroke();
      }

      // ── Draw stars ──
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        let rz = s.z - cam.z;

        // Recycle stars behind camera
        if (rz < -50) {
          s.z = cam.z + FAR_PLANE + randomRange(0, 2000);
          s.x = randomRange(-TUNNEL_HALF_W, TUNNEL_HALF_W);
          s.y = randomRange(-TUNNEL_HALF_H, TUNNEL_HALF_H);
          rz = s.z - cam.z;
        }

        const p = project(s.x, s.y, s.z, cam.z, cam.tiltX, cam.tiltY, cx, cy);
        if (!p) continue;

        // Depth-based opacity with fade-in near edges
        const depthNorm = 1 - rz / FAR_PLANE;
        const alpha = Math.min(1, depthNorm * depthNorm * 1.5);
        if (alpha <= 0) continue;

        // Size scales with proximity
        const r = s.radius * p.scale * 60;
        if (r < 0.1) continue;

        // Star colour
        let rgb = COLORS.cyanRGB;
        if (s.color === COLORS.violet) rgb = COLORS.violetRGB;
        else if (s.color === COLORS.magenta) rgb = COLORS.magentaRGB;

        // Glow for closer/brighter stars
        if (r > 1.5) {
          ctx.shadowColor = `rgba(${rgb}, 0.6)`;
          ctx.shadowBlur = r * 3;
        }

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, Math.min(r, 4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fill();

        // Streak effect for very close stars
        if (rz < 800 && r > 1) {
          const streakLen = Math.min(30, (800 - rz) * 0.04);
          const grad = ctx.createLinearGradient(p.sx, p.sy, p.sx, p.sy - streakLen);
          grad.addColorStop(0, `rgba(${rgb}, ${alpha * 0.5})`);
          grad.addColorStop(1, `rgba(${rgb}, 0)`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.min(r * 0.6, 2);
          ctx.beginPath();
          ctx.moveTo(p.sx, p.sy);
          ctx.lineTo(p.sx, p.sy - streakLen);
          ctx.stroke();
        }

        ctx.shadowBlur = 0;
      }

      // ── Draw floating dev symbols ──
      const glyphs = glyphsRef.current;
      for (let i = 0; i < glyphs.length; i++) {
        const g = glyphs[i];
        let rz = g.z - cam.z;

        // Recycle
        if (rz < -100) {
          g.z = cam.z + FAR_PLANE + randomRange(0, 3000);
          g.x = randomRange(-TUNNEL_HALF_W * 0.7, TUNNEL_HALF_W * 0.7);
          g.y = randomRange(-TUNNEL_HALF_H * 0.7, TUNNEL_HALF_H * 0.7);
          g.shape = GLYPH_SHAPES[Math.floor(Math.random() * GLYPH_SHAPES.length)];
          rz = g.z - cam.z;
        }

        // Rotate
        g.rot += g.rotSpeed;

        const p = project(g.x, g.y, g.z, cam.z, cam.tiltX, cam.tiltY, cx, cy);
        if (!p) continue;

        const depthNorm = 1 - rz / FAR_PLANE;
        const alpha = Math.min(0.35, depthNorm * depthNorm * 0.5);
        if (alpha <= 0.02) continue;

        const shapeSize = Math.max(2, g.size * p.scale * 35);
        if (shapeSize < 1.5) continue;

        ctx.save();
        ctx.translate(p.sx, p.sy);
        ctx.rotate(g.rot);

        const rgb = g.color === COLORS.cyan ? COLORS.cyanRGB : COLORS.violetRGB;

        // Subtle glow
        ctx.shadowColor = `rgba(${rgb}, 0.25)`;
        ctx.shadowBlur = 5;
        ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.4})`;
        ctx.lineWidth = Math.max(0.5, shapeSize * 0.08);

        drawGlyphShape(ctx, g.shape, shapeSize);

        ctx.shadowBlur = 0;
        ctx.restore();
      }

      // ── Subtle center glow (vanishing point) ──
      const vpGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.15);
      vpGrad.addColorStop(0, `rgba(${COLORS.cyanRGB}, 0.04)`);
      vpGrad.addColorStop(0.5, `rgba(${COLORS.violetRGB}, 0.02)`);
      vpGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = vpGrad;
      ctx.fillRect(0, 0, w, h);

      // ── Vignette ──
      const vigGrad = ctx.createRadialGradient(cx, cy, w * 0.25, cx, cy, w * 0.75);
      vigGrad.addColorStop(0, "rgba(10,10,15,0)");
      vigGrad.addColorStop(1, "rgba(10,10,15,0.5)");
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, w, h);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initScene, project]);

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
            "radial-gradient(ellipse at 50% 50%, rgba(45,226,230,0.06) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(168,85,247,0.06) 0%, transparent 50%), var(--bg-base)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
