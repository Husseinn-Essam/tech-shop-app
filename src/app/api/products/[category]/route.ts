import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
interface categories {
  category: string;
}
export const GET = async (
  req: NextApiRequest,
  { params }: { params: categories }
) => {
  try {
    const { category } = params;
    const selectedCategories = category.split(",");
    console.log(selectedCategories);

    await connect();
    // const products = await Product.findById("64d38f0143953ad00bdccc8f");
    const filteredProducts = await Product.find({
      categories: { $in: selectedCategories },
    });
    console.log(filteredProducts);

    return new NextResponse(JSON.stringify(filteredProducts), { status: 200 });
  } catch (err) {
    console.log(err);

    return new NextResponse(err as string, { status: 500 });
  }
};
