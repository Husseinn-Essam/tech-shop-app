import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { generateShortOrderID } from "@/utils/helpers";

// cashout route handler
export const PUT = async (req: NextRequest, { params }) => {
  const { id } = params;
  try {
    await connect();
    const user = await User.findById(id);
    const orderItems = [];
    // while (user.cart.length != 0) {
    //   orderItems.push(item);
    // }
    user.cart.forEach((item) => orderItems.push(item));
    console.log(orderItems);

    user.orders.push({
      id: generateShortOrderID(4),
      date: new Date(),
      totalAmount: user.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
      status: "Delivered",
      details: orderItems,
    });

    const updatedUser = await User.findByIdAndUpdate(user._id, {
      cart: [],
      orders: user.orders,
    });

    // console.log(JSON.stringify(updatedUser.orders));

    return new NextResponse(JSON.stringify(updatedUser.orders), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err as string, { status: 500 });
  }
};
