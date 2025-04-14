"use client";
import Image from "next/image";
import AdSection from "@/components/HomePage/AdSection";
import Products from "@/components/HomePage/Products";

export default function Home() {
  return (
    <div className="bg-background flex w-full flex-col px-4 py-12 md:pb-20">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-12 md:gap-20">
        <AdSection />
        <Products />
      </div>
    </div>
  );
}
