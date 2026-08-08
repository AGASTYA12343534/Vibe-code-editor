"use client";

import { Button } from "@/components/ui/button"
import { ArrowDown, Github } from "lucide-react"
import { useRef } from "react"

const AddRepo = () => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative px-6 py-6 flex flex-row justify-between items-center border border-white/5 rounded-xl bg-[#0A0A0A] cursor-pointer 
      transition-all duration-500 ease-out overflow-hidden
      hover:border-[#E93F3F]/50 hover:shadow-[0_0_40px_rgba(233,63,63,0.1)]"
    >
      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(233,63,63,0.15), transparent 40%)`,
        }}
      />

      <div className="flex flex-row justify-center items-start gap-4 relative z-10">
        <Button
          variant={"outline"}
          className="flex justify-center items-center bg-[#111111] border-white/10 group-hover:bg-[#E93F3F]/10 group-hover:border-[#E93F3F] group-hover:text-[#E93F3F] transition-all duration-500 text-white"
          size={"icon"}
        >
          <ArrowDown size={24} className="transition-transform duration-500 group-hover:translate-y-1" />
        </Button>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-white group-hover:text-[#e93f3f] transition-colors">Import Repository</h1>
          <p className="text-sm text-zinc-500 max-w-[220px]">Work with your GitHub repositories</p>
        </div>
      </div>

      <div className="relative w-32 h-24 bg-[#111111] rounded-lg border border-white/5 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-[#E93F3F]/30 transition-colors z-10 hidden sm:flex">
        <Github size={40} className="text-zinc-700 group-hover:text-[#E93F3F]/80 transition-colors duration-500" />
      </div>
    </div>
  )
}

export default AddRepo
