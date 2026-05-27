import winston from 'winston';
import { devFormat, prodFormat } from './formatter.js';
import { consoleTransport, fileTransports } from './transport.js';
import { LoggerConfig } from '../../config/index.js';

export const logger = winston.createLogger({
    level: LoggerConfig.LOG_LEVEL,
    format: LoggerConfig.isProduction ? prodFormat : devFormat,
    transports: [consoleTransport, ...fileTransports],
    silent: LoggerConfig.isTest,
});
