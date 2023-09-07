import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/utils/helpers";
import User from "@/models/User";

export const GET = async () => {
  try {
    await connect();

    const users = await User.findOne({});
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new NextResponse(err as string, { status: 500 });
  }
};

export const PUT = async (req: any) => {
  const data = await req.json();
  const accessToken = req.headers.get("Authorization");

  try {
    if (accessToken && verifyJwt(accessToken)) {
      const { name, product } = data;

      const ourUser = await User.findOne({ username: name });

      const existingProduct = ourUser.cart.find(
        (prod) => prod.name === product.name
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        ourUser.cart.push(product);
      }

      const updatedUser = await User.findByIdAndUpdate(ourUser._id, {
        cart: ourUser.cart,
      });

      return new Response(updatedUser);
    }
  } catch (err) {
    console.error(err);
  }
};
