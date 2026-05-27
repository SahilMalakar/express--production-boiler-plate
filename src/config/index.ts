import dotenv from 'dotenv';

dotenv.config();
console.log('Environment variables loaded successfully.');

type ServerConfigType = {
    PORT: number;
};

type LoggerConfigType = {
    LOG_LEVEL: string;
    NODE_ENV: string;
    isProduction: boolean;
    isTest: boolean;
};

export const ServerConfig: ServerConfigType = {
    PORT: Number(process.env.PORT) || 6000,
};

export const LoggerConfig: LoggerConfigType = {
    LOG_LEVEL: process.env.LOG_LEVEL ?? 'info',
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
};
