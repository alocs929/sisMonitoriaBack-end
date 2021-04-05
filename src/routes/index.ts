import { Router } from 'express';

import monitorRouter from './classes.routes';
import userRouter from './connections.routes';

const routes = Router();

routes.use('/classes', monitorRouter); // post //get
routes.use('/connections', userRouter); // post //get
export default routes;
