import catalogServices from "@/services/catalogServices";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  rating: number;
  stock: number;
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
        prods.map((prod) => (
          <Card
            key={prod._id}
            name={prod.name}
            price={prod.price}
            stock={prod.stock}
            rating={prod.rating}
            images={prod.images || []}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </>
  );
};

export default Catalog;
