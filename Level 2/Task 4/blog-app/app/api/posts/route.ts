import prisma from "@/lib/db";
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await getSession();

  try {
    if (!user?.email)
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );

    const data = await req.json();
    const { title, content } = data;

    const blog = await prisma.post.create({
      data: {
        title,
        content,
        authorEmail: user.email,
      },
    });
    return NextResponse.json({ blog }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
