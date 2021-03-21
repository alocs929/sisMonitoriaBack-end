import { Router } from 'express';

import monitorRouter from './monitor.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/monitor', monitorRouter);
routes.use('/user', userRouter);

export default routes;
