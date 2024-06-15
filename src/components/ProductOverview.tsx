'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import catalogServices from '@/services/catalogServices';
import { useQuery } from '@tanstack/react-query';
import IKContext from './IKContext';
import IKImage from './IKImage';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon , ArrowRightCircleIcon} from '@heroicons/react/20/solid';
import { useRouter } from "next/navigation";
const ProductOverview = () => {
  const router = useRouter();
  const { data: products, isLoading, error } = useQuery([], catalogServices.getHighestRatedProdsInEachCategory);

  const urlEndpoint = `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKITID}`;

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const categories = Object.keys(products);

  const navigateCategory = (direction) => {
    if (direction === 'next') {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    } else if (direction === 'prev') {
      setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    }
  };

  const handleCheckStore = () => {
    // Implement your logic to navigate to the store page
    // For example, you can use React Router or Next.js Link
    router.push('/store');
    // Replace this with your actual navigation code
    // window.location.href = '/store'; // Example for direct navigation
  };

  return (
    <div data-theme="mytheme" className="flex w-full items-start text-white py-16 relative ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative lg:mt-32 md:mt-32">
        <div className="relative w-full flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 z-10 md:ml-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Best Seller
            </motion.h1>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-secondary "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {categories[currentCategoryIndex]}
            </motion.h1>
            <motion.p
              className="text-base md:text-lg lg:text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className='flex flex-col'>
                Discover The best tech products.
                <button
              onClick={handleCheckStore}
              className="flex flex-row mt-4 w-56 text-lg md:text-xl lg:text-2xl btn btn-secondary text-white px-4 py-2 rounded-md"
            >
            Check Store <ArrowRightCircleIcon className="w-6 h-6" />
          </button>
              </div>
            </motion.p>
          </motion.div>
          <motion.div
            className="md:absolute inset-0 md:left-1/3 flex justify-center items-center "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: -100 }}
            key={currentCategoryIndex}
          >
            <IKContext urlEndpoint={urlEndpoint}>
              <IKImage
                path={products[categories[currentCategoryIndex]].images[0]}
                transformation={[
                  {
                    height: currentCategoryIndex === 0 ? '400' : '300',
                    width: '400',
                    quality: 'auto',
                  },
                ]}
                className="w-full h-auto md:max-w-md"
              />
            </IKContext>
          </motion.div>
        </div>
        <div className='flex flex-col items-center mt-4 md:mt-0 md:mr-5 z-10 w-1/3 '>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary">
            The {products[categories[currentCategoryIndex]].name.substring(0, 8)}
          </h1>
          <div className="flex flex-row items-center">
            <button
              onClick={() => navigateCategory('prev')}
              className="text-xl md:text-2xl lg:text-3xl text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <ChevronDoubleLeftIcon className="w-10 h-10 md:w-16 md:h-16 " />
            </button>
            <button
              onClick={() => navigateCategory('next')}
              className="text-xl md:text-2xl lg:text-3xl text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <ChevronDoubleRightIcon className="w-10 h-10 md:w-16 md:h-16 " />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
