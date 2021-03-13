import { Router } from 'express';
import { MoneytoriaController } from '../controllers/MoneytoriaController';

const routes = Router();

const moneytiriaController = new MoneytoriaController();

routes.post("/" , moneytiriaController.create);



export default routes;
