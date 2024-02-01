import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { itemName, description, cost, stock, image } = await req.json();

    const c = parseInt(cost);
    const s = parseInt(stock);
    const productList = await prisma.product.create({
      data: {
        name: itemName,
        description,
        cost: c,
        image,
        stock: s,
      },
    });

    return NextResponse.json({ products: productList }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
