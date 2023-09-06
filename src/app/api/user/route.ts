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
  console.log("i get here ");
  const data = await req.json();
  const accessToken = req.headers.get("Authorization");

  const { name, product } = data;
  console.log(name, product);

  try {
    if (accessToken && verifyJwt(accessToken)) {
      const ourUser = await User.findOne({ username: name });

      const updatedCart = [...ourUser.cart, product];
      const updatedUser = await User.findByIdAndUpdate(
        ourUser._id,
        { cart: updatedCart },
        { new: true }
      );
      return new Response(updatedUser);
    }
  } catch (err) {
    console.log(err);
  }
};
