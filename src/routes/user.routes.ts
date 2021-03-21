import { Router, Response, Request } from 'express';
// import MoneytoriaController from '../controllers/MoneytoriaController';

const userRouter = Router();
// const moneytoriaController = new MoneytoriaController();

userRouter.get('/', (request: Request, response: Response) => {
   return response.json({"teste": "Testado"});
});

export default userRouter;
