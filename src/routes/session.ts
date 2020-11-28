import { Router } from 'express';

import sessionController from '../controller/SessionController';

const sessionRouter = Router();

sessionRouter.post('/', sessionController.login);

export default sessionRouter;