"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductOverview from "@/components/ProductOverview";
import WhyUsCards from "@/components/WhyUsCards";
import { Footer } from "@/components/Footer";
export default function Home() {
  const router = useRouter();

  return (
    <>
    <div data-theme="mytheme" className=" flex flex-col h-full bg-base items-center gap-32">
    
      <ProductOverview/>
      <WhyUsCards/>
    <Footer/>
    </div>
    </>
  );
}
