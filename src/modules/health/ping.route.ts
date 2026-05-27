import { Router } from 'express';
import { pingHandler } from './ping.controller.js';

const heathcheckRouter: Router = Router();

heathcheckRouter.post('/ping', pingHandler);

export { heathcheckRouter };
