import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}

export default function GlassCard({ children, className = "", hover = true, id }: GlassCardProps) {
  return (
    <div
      id={id}
      className={`glass rounded-2xl ${hover ? "glass-hover transition-all duration-300" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
