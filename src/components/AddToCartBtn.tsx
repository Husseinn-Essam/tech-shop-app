"use client";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { addProductToCart } from "@/services/userServices";
import { useSession } from "next-auth/react";
interface Props {
  name: string;
  price: number;
  rating: number;
  images: string[];
}
const AddToCartBtn: React.FC<Props> = ({ name, price, rating, images }) => {
  const { data: session } = useSession();

  return (
    <button
      onClick={() =>
        addProductToCart(
          session.user.name,
          {
            name,
            price,
            rating,
            images,
          },
          session.accessToken
        )
      }
      className="add-to-cart-btn absolute hidden group-hover:block"
    >
      {/* Icon */}
      <ShoppingCartIcon className="h-11 w-11" />
    </button>
  );
};

export default AddToCartBtn;
