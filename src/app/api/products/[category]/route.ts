import connect from "@/utils/db";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { category: string } }
) => {
  try {
    const category = params.category;

    const selectedCategories = category.split(",");

    await connect();
    const filteredProducts = await Product.find({
      categories: { $in: selectedCategories },
    });

    return new NextResponse(JSON.stringify(filteredProducts), { status: 200 });
  } catch (err) {
    console.log(err);

    return new NextResponse(err as string, { status: 500 });
  }
};
