import { Router } from 'express';
import ConnectionsController from '../controllers/ConnectionsController';
// import MoneytoriaController from '../controllers/MoneytoriaController';

const connectionsController = new ConnectionsController();

const userRouter = Router();
// const moneytoriaController = new MoneytoriaController();
// userRouter.get('/', connectionsController.search);

export default userRouter;
