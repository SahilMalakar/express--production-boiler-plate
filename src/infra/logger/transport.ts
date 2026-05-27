import winston from 'winston';

export const consoleTransport = new winston.transports.Console();

export const fileTransports = [
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
    new winston.transports.File({
        filename: 'logs/combined.log',
    }),
];
