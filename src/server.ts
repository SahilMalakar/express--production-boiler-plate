import express, { type Express } from 'express';
import { requestLogger } from './shared/middlewares/requestLogger.js';
import { heathcheckRouter } from './modules/health/ping.route.js';
import { errorMiddleware } from './shared/middlewares/globalError.js';

const app: Express = express();

app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', heathcheckRouter);

app.use(errorMiddleware);
export { app };
