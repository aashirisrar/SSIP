import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const orderList = await prisma.order.findMany();

    const productList = await prisma.orderItem.findMany({
      where: {
        orderId: {
          in: orderList.map((order) => order.id),
        },
      },
    });

    return NextResponse.json(
      { data: orderList, products: productList },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
