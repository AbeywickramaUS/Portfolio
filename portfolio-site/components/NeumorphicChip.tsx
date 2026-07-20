import { ReactNode } from "react";

interface NeumorphicChipProps {
  children: ReactNode;
  className?: string;
  glowCyan?: boolean;
}

export default function NeumorphicChip({ children, className = "", glowCyan = false }: NeumorphicChipProps) {
  return (
    <span
      className={`neumorph inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
        glowCyan
          ? "text-neon-cyan glow-cyan border-neon-cyan/20"
          : "text-text-primary"
      } ${className}`}
    >
      {children}
    </span>
  );
}
