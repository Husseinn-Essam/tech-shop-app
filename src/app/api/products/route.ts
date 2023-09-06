import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req: any, res: any) => {
  try {
    await connect();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new NextResponse(err as string, { status: 500 });
  }
};

export const POST = async (req: any, res: any) => {
  try {
    const body = await req.json();
    const newProd = new Product(body);
    await connect();

    await newProd.save();

    return new NextResponse("Product has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(err as string, { status: 500 });
  }
};
