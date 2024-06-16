"use client";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUser, changeItemQuantity } from "@/services/userServices";
import { useSession } from "next-auth/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const router = useRouter();

  const user = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      if (session?.user?._doc?._id) {
        return getUser(session.user._doc._id);
      }
      return null;
    },
    suspense: true,
    staleTime: 5 * 1000,
  });

  const cartMutation = useMutation({
    mutationFn: (variables: [string, string, string]) => changeItemQuantity(...variables),
    onMutate: async ([mode, productName, userId]) => {
      await queryClient.cancelQueries(["user"]);

      const previousUser = queryClient.getQueryData(["user"]);

      queryClient.setQueryData(["user"], (old: any) => {
        if (!old?.data?.cart) return old;
        const newCart = old.data.cart.map((item: any) => {
          if (item.name === productName) {
            return {
              ...item,
              quantity: mode === "inc" ? item.quantity + 1 : item.quantity - 1,
            };
          }
          return item;
        });
        return {
          ...old,
          data: {
            ...old.data,
            cart: newCart,
          },
        };
      });

      return { previousUser };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(["user"], context.previousUser);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  const handleChangeQuantity = (mode: string, productName: string, id: string) => {
    cartMutation.mutate([mode, productName, id]);
  };

  return (
 
      <tbody>
        {user?.data?.cart?.map((item) => (
          <tr key={item._id} className="border-b">
            <td className="py-2 px-4">{item.name}</td>
            <td className="py-2 px-4 flex gap-2 justify-center text-2xl">
              <button
                onClick={() => handleChangeQuantity("dec", item.name, session.user._doc._id)}
                className="px-2 py-1"
              >
                <MinusCircleIcon className="h-6 w-6" />
              </button>
              <p className="text-xl">{item.quantity}</p>
              <button
                onClick={() => handleChangeQuantity("inc", item.name, session.user._doc._id)}
                className="px-2 py-1"
              >
                <PlusCircleIcon className="w-6 h-6" />
              </button>
            </td>
            <td className="py-2 px-4">EGP{item.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    
  );
};

export default Cart;
