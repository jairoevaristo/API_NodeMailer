import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

export default (err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ status: 'error', message: err.message });
  }

  return res.status(500).json({ message: 'Interval server error' });
};