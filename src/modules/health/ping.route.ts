import { Router } from "express";
import { pingHandler } from "./ping.controller.js";

const heathcheckRouter: Router = Router();

heathcheckRouter.get("/", pingHandler);

export {
    heathcheckRouter
}