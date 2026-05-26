export class AppError extends Error {
  public statusCode: number;
  public errorCode?: string;

  constructor(message: string, statusCode: number = 500, errorCode?: string) {
    super(message);

    this.statusCode = statusCode;
    if (errorCode !== undefined) {
      this.errorCode = errorCode;
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, "VALIDATION_ERROR");
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 404, "NOT_FOUND");
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, 401, "UNAUTHORIZED");
  }
}

export class ForbiddenError extends AppError {
    constructor(message: string) {
        super(message, 403, "FORBIDDEN");
    }
}

export class InternalServerError extends AppError {
    constructor(message: string) {
        super(message, 500, "INTERNAL_SERVER_ERROR");
    }
}

export class BadRequestError extends AppError {
    constructor(message: string) {
        super(message, 400, "BAD_REQUEST");
    }
}