import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers, getUser } from "@/services/userServices";
import { useSession } from "next-auth/react";
const CartProductNumber = () => {
  const { data: session } = useSession();
  let numberOfProducts = 0;
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
  user?.data?.cart.forEach((prod) => {
    numberOfProducts += prod.quantity;
  });
  return <div>{numberOfProducts}</div>;
};

export default CartProductNumber;
