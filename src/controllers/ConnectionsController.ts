import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ClassesRepository from '../repositories/ClassesRepository';
import ClassesScheduleRepository from '../repositories/ClassesScheduleRepository';
import ConnectionsRepository from '../repositories/ConnectionsRepository';

class ConnectionsController {
  // async index(req: Request, res: Response): Promise<any> {
  //  const connectionsRepository = getCustomRepository(ConnectionsRepository);
  // }
}

export default ConnectionsController;
