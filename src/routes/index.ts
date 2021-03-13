import { Router } from 'express';
import monitorRouter from './monitor.routes';

const routes = Router();

routes.use('/monitor', monitorRouter);

export default routes;
