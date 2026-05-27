import type { NextFunction, Request, Response } from 'express';
import { logger } from '../../infra/logger/index.js';
import { AppError } from '../errors/app.error.js';
import { sendError } from '../utils/apiResponse.js';

export const errorMiddleware = (
    err: unknown,
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    let error: AppError;

    if (err instanceof AppError) {
        error = err;
    } else {
        const message =
            err instanceof Error ? err.message : 'Internal Server Error';
        error = new AppError(message, 500, 'INTERNAL_ERROR', false);
    }

    // Prisma unique constraint
    if (
        err instanceof Error &&
        'code' in err &&
        (err as Record<string, unknown>).code === 'P2002'
    ) {
        error = new AppError('Duplicate field value', 409, 'UNIQUE_CONSTRAINT');
    }

    const stackArray = error.stack
        ? error.stack
              .split('\n')
              .map((l) => l.trim())
              .filter(Boolean)
        : [];

    // operational errors (AppError) → warn, unknown crashes → error
    if (error.isOperational) {
        logger.warn(error.message, {
            errorCode: error.errorCode,
            statusCode: error.statusCode,
            method: req.method,
            url: req.originalUrl,
        });
    } else {
        logger.error(error.message, {
            errorCode: error.errorCode,
            statusCode: error.statusCode,
            method: req.method,
            url: req.originalUrl,
            stack: stackArray,
        });
    }

    return sendError(
        res,
        error.message,
        error.statusCode,
        error.errorCode,
        error.stack
    );
};
