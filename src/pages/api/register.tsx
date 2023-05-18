import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "~/server/db";

interface RegisterResponse {
  sessionId: string;
}
interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<RegisterResponse>) {
  if (req.method === "POST") {
    const request = req.body as RegisterRequest;
    const user = await prisma.user.findFirst({
      where: {
        email: request.email
      }
    });
    if (!user) {
      const newUser = await prisma.user.create({
        data: {
          username: request.name,
          email: request.email,
          password: request.password
        }
      });
      const sessionId = newUser.sessionId;
      return res.status(200).json({ sessionId });
    } 
    else {
      return res.status(404).end();
    }
  } else {
    return res.status(405).end();
  }
}
export type {RegisterResponse}