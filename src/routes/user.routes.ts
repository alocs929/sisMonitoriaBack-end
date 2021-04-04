import { Router, Response, Request } from 'express';
import UserController from '../controllers/UserController';
// import MoneytoriaController from '../controllers/MoneytoriaController';

const userController = new UserController();

const userRouter = Router();
// const moneytoriaController = new MoneytoriaController();
userRouter.get('/subject/:subject',userController.search)
userRouter.get('/', (request: Request, response: Response) => {
   return response.json({"teste": "Testado"});
});

export default userRouter;
