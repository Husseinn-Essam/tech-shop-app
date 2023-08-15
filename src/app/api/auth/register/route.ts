import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export const POST = async (req: any) => {
  const { username, email, password } = await req.json();
  await connect();

  const hashedpass = await hash(password, 5);
  const newUser = new User({
    username,
    email,
    password: hashedpass,
  });
  try {
    await newUser.save();
    return new NextResponse("user has been created", { status: 201 });
  } catch (err: any) {
    console.log(err);

    return (
      new NextResponse(err.message),
      {
        status: 500,
      }
    );
  }
};
