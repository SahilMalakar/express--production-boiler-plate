import type { Response } from 'express';
import { LoggerConfig } from '../../config/index.js';

export const sendSuccess = <T>(
    res: Response,
    data: T = null as T,
    message = 'Success',
    statusCode = 200
) => {
    return res.status(statusCode).json({
        success: true,
        statusCode,
        message,
        data,
    });
};

export const sendError = (
    res: Response,
    message = 'Internal Server Error',
    statusCode = 500,
    errorCode = 'INTERNAL_ERROR',
    stack?: string
) => {
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errorCode,
        ...(LoggerConfig.NODE_ENV === 'development' && { stack }),
    });
};

export const sendPaginated = <T>(
    res: Response,
    data: T[],
    meta: {
        total: number;
        page: number;
        limit: number;
    },
    message = 'Success',
    statusCode = 200
) => {
    return res.status(statusCode).json({
        success: true,
        statusCode,
        message,
        data,
        meta: {
            total: meta.total,
            page: meta.page,
            limit: meta.limit,
            totalPages: Math.ceil(meta.total / meta.limit),
        },
    });
};
