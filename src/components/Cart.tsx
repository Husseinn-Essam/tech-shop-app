"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers, getUser, changeItemQuantity } from "@/services/userServices";
import { useSession, SessionProvider } from "next-auth/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Cart: React.FC = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const cartMutation = useMutation<void, Error, [string, string, string]>({
    mutationFn: (variables) => changeItemQuantity(...variables),

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });
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

  const handleChangeQuantity = (
    mode: string,
    productName: string,
    id: string
  ) => {
    cartMutation.mutate([mode, productName, id]);
  };
  return (
    <tbody>
      {user.data.cart?.map((item) => (
        <tr key={item._id} className="border-b">
          <td className="py-2 px-4">{item.name}</td>
          <td className="py-2 px-4 flex gap-2 justify-center text-2xl">
            <button
              onClick={() =>
                handleChangeQuantity("dec", item.name, session.user._doc._id)
              }
              className="px-2 py-1"
            >
              <MinusCircleIcon className="h-6 w-6" />
            </button>
            <p className="text-xl"> {item.quantity}</p>

            <button
              onClick={() =>
                handleChangeQuantity("inc", item.name, session.user._doc._id)
              }
              className="px-2 py-1 "
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
