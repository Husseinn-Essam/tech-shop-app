import catalogServices from "@/services/catalogServices";
import React, { useEffect, useState } from "react";

interface Product {
  name: string;
  description?: string;
  price?: number;
  rating?: number;
  stock?: number;
  categories?: string[];
  images?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const Catalog = () => {
  const [prods, setProds] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProds() {
      try {
        const prodsData = await catalogServices.getAllProds();
        setProds(prodsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProds();
  }, []);

  return (
    <>
      {prods.length > 0 ? (
        <h1>{prods[0].name}</h1>
      ) : (
        <p>No products available.</p>
      )}
    </>
  );
};

export default Catalog;
