import { Router } from 'express';

import userController from '../controller/UserController';

import AuthMiddleware from '../middleware/auth';

const userRouter = Router();

userRouter.post('/', userController.store);

userRouter.use(AuthMiddleware);

userRouter.get('/', userController.index);

export default userRouter;