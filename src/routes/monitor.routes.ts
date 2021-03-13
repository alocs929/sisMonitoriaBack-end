import { Router, Response, Request } from 'express';
// import MoneytoriaController from '../controllers/MoneytoriaController';

const monitorRouter = Router();
// const moneytoriaController = new MoneytoriaController();

// monitorRouter.post('/', moneytoriaController.create);
monitorRouter.get('/', (request: Request, response: Response) => {
  return response.json({ ok: true });
});
export default monitorRouter;
