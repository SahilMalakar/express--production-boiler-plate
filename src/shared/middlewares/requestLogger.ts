import type { NextFunction, Request, Response } from 'express';
import { logger } from '../../infra/logger/index.js';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on('finish', () => {
    const ms = Date.now() - start;
    const level = res.statusCode >= 500 ? 'error'
                : res.statusCode >= 400 ? 'warn'
                : 'http';

    logger.log(level, 'incoming request', {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      ms,
    });
  });

  next();
};