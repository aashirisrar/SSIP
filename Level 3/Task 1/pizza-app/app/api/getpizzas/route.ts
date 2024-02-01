import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const pizzaList = await prisma.product.findMany();
    return NextResponse.json({ data: pizzaList }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
