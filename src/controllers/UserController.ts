import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import ClassesRepository from '../repositories/ClassesRepository';
import ClassesScheduleRepository from '../repositories/ClassesScheduleRepository';
import ConnectionsRepository from '../repositories/ConnectionsRepository';
import MonitorRepository from '../repositories/MonitorRepository';

class UserController {
  async index(req: Request, res: Response) {
    const connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async search(req: Request, res: Response) {
    const monitorRepository = getCustomRepository(MonitorRepository);
    const classesRepository = getCustomRepository(ClassesRepository);
    const classesScheduleRepository = getCustomRepository(
      ClassesScheduleRepository,
    );

    const { subject } = req.params;

    const Classes = await classesRepository.find({ subject });
    const total = [];
    for (let i = 0; i < Classes.length; i++) {
      const monitor = await monitorRepository.find({
        id: Classes[i].monitor_id,
      });
      const classesschedule = await classesScheduleRepository.find({
        classe_id: Classes[i].id,
      });
      const classes = Classes[i];
      const dados = {
        monitor,
        classes,
        classesschedule,
      };
      total.push(dados);
    }
    res.json(total);
  }
}

export default UserController;
