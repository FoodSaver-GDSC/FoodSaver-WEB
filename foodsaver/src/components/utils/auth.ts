// utils/auth.ts
import { serialize } from 'cookie';
import { NextApiResponse } from 'next';

export const setTokenCookie = (res: NextApiResponse, token: string) => {
    // 쿠키에 토큰 저장
    const cookieOptions = {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60, // 30일간 유효
        path: '/',
    };

    res.setHeader('Set-Cookie', serialize('token', token, cookieOptions));
};
