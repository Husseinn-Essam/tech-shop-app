"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductOverview from "@/components/ProductOverview";


export default function Home() {
  const router = useRouter();

  return (
    <>
    <div data-theme="mytheme" className=" flex flex-col h-full bg-base items-center">
    
      <ProductOverview/>
      
    </div>
    </>
  );
}
