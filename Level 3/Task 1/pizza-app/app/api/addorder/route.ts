import { getUser } from "@/lib/currentuser";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await getUser();

    if (!user)
      return NextResponse.json({ message: "Not logged in" }, { status: 401 });

    const currentUserEmail = user?.email;

    const { cost, orderitems } = await req.json();
    console.log(orderitems);

    const newOrder = await prisma.order.create({
      data: {
        totalPrice: cost,
        orderedByEmail: currentUserEmail,
        products: {
          create: orderitems.map((item: any) => ({
            name: item.name,
            description: item.description,
            cost: item.cost,
            image: item.image,
            quantity: item.quantity,
          })),
        },
      },
    });

    return NextResponse.json(
      { message: "Order added", data: newOrder },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
