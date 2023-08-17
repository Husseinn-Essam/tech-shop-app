import { NextApiRequest, NextApiResponse } from "next";
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
