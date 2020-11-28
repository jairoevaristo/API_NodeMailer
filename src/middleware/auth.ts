import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import AppError from '../errors/AppError';

interface Payload {
  id: number;
  ia: number;
  exp: number;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) throw new AppError('Not header authorization', 401);

  try {
    const token = authorization.replace('Bearer', '').trim();

    if (!token) throw new AppError('Invalid Token', 401);
    
    const data = jwt.verify(token, process.env.APP_SECRET as string);

    if (!data) throw new AppError('Invalid Token', 401);
    
    const { id } = data as Payload;
    req.id = id;

    return next();
    
  } catch(err) {
    throw new AppError(err, 400);
  }
};