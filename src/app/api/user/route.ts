import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/utils/helpers";
import User from "@/models/User";
import { headers } from "next/headers";
import { access } from "fs";

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(err as string, { status: 500 });
  }
};

export const POST = async (req: any) => {
  console.log("i get here ");
  const data = await req.json();
  console.log(data);

  const { name, product, token } = data;
  console.log(token);
  try {
    if (token && verifyJwt(token))
      return new Response(" Ok You Have Logged In!");
  } catch (err) {
    console.log(err);
  }
  //   try {
  //     const ourUser = await User.findOne({ username: user.username });
  //     if (ourUser) {
  //       console.log("hi");
  //       console.log(ourUser);
  //     }
  //     return new NextResponse("Hello world?", { status: 200 });
  //   } catch (err) {
  //     console.log(err);

  //     return new NextResponse(err as string, { status: 500 });
  //   }
};
