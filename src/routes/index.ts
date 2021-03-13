import { Router } from 'express';
import { MonitorController } from '../controllers/Monitor';

const routes = Router();

const monitorController = new MonitorController();

routes.post("/" , monitorController.create);



export default routes;
