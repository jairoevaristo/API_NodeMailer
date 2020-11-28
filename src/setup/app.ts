import "reflect-metadata";
import '../config/env';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from '../routes';
import ErrorHandler from '../middleware/errors';

import getConnection from '../database/connect';

const app = express();

//MIDDLEWARE 
app.use(express.json());

app.use(cors());

//ROUTES
app.use(routes);

app.use(ErrorHandler);

//FUNCTION CONNECT IN DATABASE
getConnection();

export default app;