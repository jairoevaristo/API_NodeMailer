import { Router } from 'express';

import useRoutes from './user';
import sessionRoutes from './session';
import recoverPasswordRouter from './recoverPassword';

const router = Router();

const routerPrefix = '/api/v1';

router.use(`${routerPrefix}/users`, useRoutes);
router.use(`${routerPrefix}/session`, sessionRoutes);
router.use(`${routerPrefix}/recover-password`, recoverPasswordRouter);

export default router;