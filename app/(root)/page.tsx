import { Button } from "@/components/ui/button";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HeroVisual } from "@/components/ui/hero-visual";

export default function Home() {
  return (
    <div className="z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      <div className="flex flex-col justify-center items-center my-5 w-full px-4">
        <HeroVisual />

        <h1 className="z-20 text-6xl mt-12 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 dark:from-red-400 dark:via-rose-400 dark:to-orange-400 tracking-tight leading-[1.3] ">
          Build with Intelligence.
        </h1>
      </div>

      <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-8 max-w-2xl font-medium leading-relaxed">
        FORGE is a serious, AI-powered developer workspace designed for deliberate practice. Enhance your craft, track your progression, and write better code with focus and discipline.
      </p>
      
      <Link href={"/dashboard"}>
        <Button variant={"brand"} className="mb-4 bg-[#E93F3F] hover:bg-[#d03636] text-white shadow-[0_0_20px_rgba(233,63,63,0.3)] transition-all hover:shadow-[0_0_30px_rgba(233,63,63,0.5)]" size={"lg"}>
          Enter Forge
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
}
