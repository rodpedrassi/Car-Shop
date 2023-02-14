import { NextFunction, Request, Response } from 'express';
import HttpException from './helpers/HttpException';

class ErrorHandler {
  public static errorMiddleware(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { status, message } = error as HttpException;
    res.status(status || 500).json({ message });
    next();
  }
}

export default ErrorHandler;