import { Router } from 'express';
import SendMailerController from '../controller/SendMailerController';

const recoverPasswordRouter = Router();

recoverPasswordRouter.post('/', SendMailerController.recoverPassword);

export default recoverPasswordRouter;