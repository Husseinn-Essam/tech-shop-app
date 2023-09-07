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
    console.log(err);
    return new NextResponse(err as string, { status: 500 });
  }
};

export const PUT = async (req: any) => {
  const data = await req.json();
  const accessToken = req.headers.get("Authorization");

  try {
    if (accessToken && verifyJwt(accessToken)) {
      const { name, product } = data;
      console.log(product);

      const ourUser = await User.findOne({ username: name });

      // Check if the product is already in the cart
      const existingProduct = ourUser.cart.find(
        (prod) => prod.name === product.name
      );

      if (existingProduct) {
        // If it exists, increment the quantity
        console.log("exists");

        existingProduct.quantity++;
        console.log(existingProduct.toJSON());
      } else {
        console.log("doesnt exist");
        // If it doesn't exist, add it to the cart with quantity 1
        ourUser.cart.push(product);
        console.log(product);
        console.log(ourUser.toJSON());
      }

      // Update the user's cart in the database
      const updatedUser = await User.findByIdAndUpdate(ourUser._id, {
        cart: ourUser.cart,
      });
      console.log("ourUser:", updatedUser.toJSON());
      console.log("updatedCart:", updatedUser.toJSON());

      return new Response(updatedUser);
    }
  } catch (err) {
    console.error(err);
  }
};
