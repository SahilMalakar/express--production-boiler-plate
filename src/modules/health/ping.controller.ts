import { type Request, type Response } from 'express';

export const pingHandler = async (
    _req: Request,
    res: Response
): Promise<void> => {
    res.status(200).json({
        msg: 'pong',
        success: true,
    });
};
