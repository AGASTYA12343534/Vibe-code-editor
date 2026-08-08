"use client";

import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import { useRouter } from "next/navigation";
import { useState, useRef } from "react"
import { toast } from "sonner";
import TemplateSelectingModal from "./template-selecting-modal";
import { createPlayground } from "../actions";

const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  } | null>(null)
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (data: {
      title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  })=>{
    setSelectedTemplate(data)

    const res = await createPlayground(data);
    toast.success("Playground Created successfully")
    setIsModalOpen(false)
    router.push(`/playground/${res?.id}`)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <div
        ref={cardRef}
        onClick={() => setIsModalOpen(true)}
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
            <Plus size={24} className="transition-transform duration-500 group-hover:rotate-180" />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white group-hover:text-[#e93f3f] transition-colors">New Session</h1>
            <p className="text-sm text-zinc-500 max-w-[220px]">Initialize a new training workspace</p>
          </div>
        </div>

        {/* Real-time Coding Visual Animation */}
        <div className="relative w-32 h-24 bg-[#111111] rounded-lg border border-white/5 p-3 overflow-hidden shadow-inner group-hover:border-[#E93F3F]/30 transition-colors z-10 hidden sm:block">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
          </div>
          <div className="flex flex-col gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="h-1.5 w-16 bg-[#E93F3F]/60 rounded animate-pulse" />
            <div className="h-1.5 w-24 bg-white/30 rounded animate-pulse" style={{ animationDelay: '150ms' }} />
            <div className="h-1.5 w-12 bg-white/30 rounded animate-pulse" style={{ animationDelay: '300ms' }} />
            <div className="flex gap-2">
              <div className="h-1.5 w-8 bg-blue-500/50 rounded animate-pulse" style={{ animationDelay: '450ms' }} />
              <div className="h-1.5 w-12 bg-white/30 rounded animate-pulse" style={{ animationDelay: '600ms' }} />
            </div>
          </div>
        </div>
      </div>
      <TemplateSelectingModal
        isOpen={isModalOpen}
        onClose={()=>setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default AddNewButton
