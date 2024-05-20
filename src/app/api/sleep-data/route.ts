import { prismaClient } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    const { name, gender, sleepDuration } = await req.json();
    const date = new Date();
    console.log("name: ", name);
    console.log("gender: ", gender);
    console.log("sleepDuration: ", sleepDuration);
    await prismaClient.sleepData.create({
      data: { name, gender, sleepDurationHrs: parseInt(sleepDuration), date },
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
    const sleepData = await prismaClient.sleepData.findMany();
    return NextResponse.json(sleepData);
  } else {
    return NextResponse.json(
      { error: "Method not allowed" },
      {
        status: 405,
      },
    );
  }
}
