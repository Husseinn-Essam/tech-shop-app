"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div data-theme="mytheme" className="hero h-full text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 ml-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col">
                <motion.h1 
                  className="text-5xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Discover
                </motion.h1>
                <motion.h1 
                  className="text-5xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  the latest gadgets and
                </motion.h1>
                <motion.h1 
                  className="text-5xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  tech products
                </motion.h1>
              </div>
              <motion.p 
                className="text-lg mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Discover the latest gadgets and tech products at unbeatable prices.
              </motion.p>
              <motion.button
                onClick={() => router.push("/store?cat=")}
                className="btn btn-secondary text-white py-2 px-6 rounded-full shadow-md transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Shop Now
              </motion.button>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <Image
                src="https://www.freeiconspng.com/uploads/laptop-png-8.png"
                width="600"
                height="600"
                alt="High Resolution Laptop Png Icon"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
