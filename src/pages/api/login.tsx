import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '~/server/db';

interface LoginResponse {
    sessionId: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<LoginResponse>) {
    if (req.method === 'POST') {
        const request = req.body as LoginRequest;
        const user = await prisma.user.findFirst({
            where: {
                email: request.email,
                password: request.password,
            }
        })
        if (user) {
            res.status(200).json({ sessionId: user.sessionId });
            return;
        } else {
            res.status(404).end();
        }
    }
}

export type {LoginResponse};