import { prismaClient } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    const { name, gender, sleepDuration } = await req.json();

    // Upsert user and create sleep data
    const user = await prismaClient.user.upsert({
      where: { name },
      update: {},
      create: {
        name,
        gender,
      },
    });

    await prismaClient.sleepData.create({
      data: {
        sleepDurationHrs: parseInt(sleepDuration.toString()),
        date: new Date().toISOString(),
        userId: user.id,
      },
    });
    return NextResponse.json({ message: "Sleep data saved." }, { status: 201 });
  } else {
    return NextResponse.json(
      { error: "Method not allowed" },
      {
        status: 405,
      },
    );
  }
}

export async function GET(req: Request) {
  if (req.method === "GET") {
    const users = await prismaClient.user.findMany({
      include: {
        sleepData: {
          // Include related sleep data
          orderBy: {
            date: "asc", // Sorting by date in ascending order
          },
        },
      },
    });

    return NextResponse.json(users);
  } else {
    return NextResponse.json(
      { error: "Method not allowed" },
      {
        status: 405,
      },
    );
  }
}
