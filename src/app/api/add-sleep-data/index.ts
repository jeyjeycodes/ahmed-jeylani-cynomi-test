import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, sleepData } = req.body;
    console.log(userId, sleepData)
    res.status(200).json({ userId, sleepData })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
