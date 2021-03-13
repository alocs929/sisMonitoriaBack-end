import { Router, Response, Request } from 'express';
import { MonitorController } from '../controllers/MonitorController';

const monitorRouter = Router();
 const monitorController = new MonitorController();

monitorRouter.post('/', monitorController.create);
monitorRouter.get('/', (request: Request, response: Response) => {
  return response.json({ ok: true });
});
export default monitorRouter;
