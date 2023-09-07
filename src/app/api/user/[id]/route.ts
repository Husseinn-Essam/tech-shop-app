import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    await connect();
    const user = await User.findById(id);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.log(err);
    console.log(id);

    return new NextResponse(err as string, { status: 500 });
  }
};

export const PUT = async (req: NextRequest, { params }) => {
  const { id } = params;
  try {
    await connect();
    const data = await req.json();
    // mode is either an increament or decrement
    const { mode, productName } = data;
    const user = await User.findById(id);

    const existingProduct = user.cart.find((prod) => prod.name === productName);

    if (mode == "inc") {
      existingProduct.quantity++;
    } else {
      existingProduct.quantity--;
    }
    if (existingProduct.quantity == 0) {
      user.cart = user.cart.filter((prod) => prod.name != existingProduct.name);
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, {
      cart: user.cart,
    });
    return new Response(updatedUser.cart);
  } catch (e) {
    console.log(e);
  }
};
