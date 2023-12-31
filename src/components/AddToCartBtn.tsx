"use client";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { addProductToCart } from "@/services/userServices";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
interface Props {
  name: string;
  price: number;
  rating: number;
  images: string[];
}
interface User {
  name: string;
  cart: Props[];
}
const AddToCartBtn: React.FC<Props> = ({ name, price, rating, images }) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const router = useRouter();
  const cartMutation = useMutation<void, Error, [string, Props, string]>({
    mutationFn: (variables) => addProductToCart(...variables),

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  const handleAddToCartClick = () => {
    if (session?.user?.name && session?.accessToken) {
      cartMutation.mutate([
        session.user.name,
        { name, price, rating, images },
        session.accessToken,
      ]);
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleAddToCartClick}
      className="add-to-cart-btn absolute hidden group-hover:block"
    >
      <ShoppingCartIcon className="h-11 w-11" />
    </button>
  );
};

export default AddToCartBtn;
