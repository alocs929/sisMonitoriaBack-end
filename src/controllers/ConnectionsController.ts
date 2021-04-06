import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ConnectionsRepository from '../repositories/connectionsRepository';

class ConnectionsController {
  async index(req: Request, res: Response): Promise<any> {
    const connectionsRepository = getCustomRepository(ConnectionsRepository);
    const connection = await connectionsRepository.find();
    const total = connection[0].counter;
    res.json(total);
  }

  async create(req: Request, res: Response): Promise<any> {
    const connectionsRepository = getCustomRepository(ConnectionsRepository);
    const connection = await connectionsRepository.find();
    if (!connection.length) {
      const cone = connectionsRepository.create({
        id: 1,
        counter: 0,
      });
      await connectionsRepository.save(cone);
    }
    const connection1 = await connectionsRepository.find();
    await connectionsRepository.update(1, {
      counter: connection1[0].counter + 1,
    });
    res.json({ status: 'OK' });
  }
}

export default ConnectionsController;
