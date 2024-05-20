import { prismaClient } from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const sleepData = await prismaClient.sleepData.findMany();
    res.status(200).json(sleepData);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
