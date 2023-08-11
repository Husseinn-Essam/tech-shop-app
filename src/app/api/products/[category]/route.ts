import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
interface categories {
  category: string; // Adjust the type according to your needs
}
export const GET = async (
  req: NextApiRequest,
  { params }: { params: categories }
) => {
  try {
    const { category } = params;
    console.log(category);

    await connect();
    const products = await Product.findById("64d38f0143953ad00bdccc8f");
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new NextResponse(err as string, { status: 500 });
  }
};
