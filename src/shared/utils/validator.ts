import type { Request, Response, NextFunction, RequestHandler } from "express";
import { z } from "zod";

export const validateRequestBody = <T extends z.ZodType>(
  schema: T,
): RequestHandler => {
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error,
      });
      return;
    }
    req.body = result.data as Request["body"];
    next();
  };
};

export const validateQuery = <T extends z.ZodType>(schema: T): RequestHandler => {
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
    const result = schema.safeParse(req.query);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error,
      });
      return;
    }
    req.query = result.data as Request['query'];
    next();
  };
};

export const validateParams = <T extends z.ZodType>(schema: T): RequestHandler => {
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error,
      });
      return;
    }
    req.params = result.data as Request['params'];
    next();
  };
};
