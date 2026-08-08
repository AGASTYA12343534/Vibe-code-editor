"use client";

import React, { useEffect, useState } from "react";
import { Terminal, Code2, Cpu } from "lucide-react";


export function HeroVisual() {
  const [lines, setLines] = useState<number>(0);
  const widths = ["45%", "30%", "52%", "38%", "48%"];

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => (prev < 5 ? prev + 1 : 0));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-video rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-[0_0_40px_rgba(233,63,63,0.15)] flex flex-col group">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#111111]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors" />
          </div>
          <span className="ml-2 text-xs text-muted-foreground font-mono flex items-center gap-1">
            <Terminal size={12} />
            forge-session.ts
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Code2 size={14} className="animate-pulse text-[#E93F3F]" />
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 p-4 font-mono text-sm flex flex-col gap-2 relative">
        <div className="flex items-center gap-3 text-muted-foreground/50">
          <span>1</span>
          <div className="h-4 w-32 bg-blue-500/10 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-3 text-muted-foreground/50">
          <span>2</span>
          <div className="flex gap-2">
            <div className="h-4 w-12 bg-purple-500/10 rounded animate-pulse" />
            <div className="h-4 w-40 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground/50">
          <span>3</span>
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 transition-all duration-300 ${i < lines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            <span className="text-muted-foreground/50">{i + 4}</span>
            <div className="flex gap-2 w-full">
              {i % 2 === 0 && <div className="h-4 w-8 bg-red-500/20 rounded" />}
              <div
                className="h-4 bg-white/10 rounded"
                style={{ width: widths[i] }}
              />
            </div>
          </div>
        ))}

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E93F3F]/5 to-transparent pointer-events-none" />

        {/* Subtle motion visual */}
        <div className="absolute bottom-4 right-4 text-[#E93F3F]/30 flex items-center gap-2">
          <span className="text-xs tracking-widest font-sans uppercase">Training</span>
          <Cpu size={16} className="animate-pulse" />
        </div>
      </div>
    </div>
  );
}
