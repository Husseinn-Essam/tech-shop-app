"use client";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { addProductToCart } from "@/services/userServices";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

  const cartMutation = useMutation<void, Error, [string, Props, string]>({
    mutationFn: (variables) => addProductToCart(...variables),
    // onMutate: () => {
    //   queryClient.setQueryData(["user"], (prevData: User) => {
    //     if (prevData) {
    //       return {
    //         ...prevData,
    //         cart: prevData.cart.push({
    //           name: name,
    //           price: price,
    //           rating: rating,
    //           images: images,
    //         }),
    //       };
    //     }
    //     return prevData;
    //   });
    // },
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
