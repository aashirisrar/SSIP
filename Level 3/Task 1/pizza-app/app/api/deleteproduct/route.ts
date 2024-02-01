import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.product.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
