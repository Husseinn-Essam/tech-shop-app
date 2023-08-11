import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log("i made it here");

    await connect();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new NextResponse(err as string, { status: 500 });
  }
};
