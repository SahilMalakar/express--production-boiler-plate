import winston from 'winston';

const { combine, timestamp, errors, json, colorize, printf } = winston.format;

export const devFormat = combine(
    colorize(),
    timestamp({ format: 'HH:mm:ss' }),
    errors({ stack: true }),
    printf(({ level, message, timestamp, stack, ...meta }) => {
        const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : '';
        return `${timestamp} [${level}]: ${stack || message} ${metaStr}`;
    })
);

export const prodFormat = combine(
    timestamp(),
    errors({
        stack: true,
    }),
    json()
);
