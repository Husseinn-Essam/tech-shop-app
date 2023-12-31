"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="hero h-full bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 md:flex-row items-center">
            <div className="md:w-1/2 ml-10">
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold mb-4">Discover</h1>
                <h1 className="text-5xl font-bold mb-4">
                  the latest gadgets and
                </h1>
                <h1 className="text-5xl font-bold mb-4"> tech products</h1>
              </div>
              <p className="text-lg mb-6">
                Discover the latest gadgets and tech products at unbeatable
                prices.
              </p>
              <button
                onClick={() => router.push("/store?cat=")}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-md transition duration-300"
              >
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2">
              {/* <img
                src=""
                width="350"
                alt="High Resolution Laptop Png Icon"
                className="w-full rounded-md shadow-lg"
              /> */}
              <Image
                src="https://www.freeiconspng.com/uploads/laptop-png-8.png"
                width="600"
                height="600"
                alt="High Resolution Laptop Png Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
