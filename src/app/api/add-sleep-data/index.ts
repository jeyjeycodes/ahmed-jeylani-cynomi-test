import { prismaClient } from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, gender, sleepDuration } = req.body;
    const date = new Date();
    await prismaClient.sleepData.create({
      data: { name, gender, sleepDurationHrs: parseInt(sleepDuration), date },
    });
    res.status(201).json({ message: "Sleep data saved." });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
