import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { title } = data;
    const blogs = await prisma.post.findMany({
      where: {
        title,
      },
    });
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
