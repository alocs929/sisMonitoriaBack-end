import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ClassesRepository from '../repositories/ClassesRepository';
import ClassesScheduleRepository from '../repositories/ClassesScheduleRepository';

import MonitorRepository from '../repositories/MonitorRepository';
import { request } from 'https';

class MonitorController {
  async create(req: Request, res: Response): Promise<any> {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      weekday,
      time_from,
      time_to,
    } = req.body;
    console.log(req.body);
    res.json({status: 'OK'});
    

    const monitorRepository = getCustomRepository(MonitorRepository);
    const classesRepository = getCustomRepository(ClassesRepository);
    const classesScheduleRepository = getCustomRepository(
      ClassesScheduleRepository,
    );

    const monitor = monitorRepository.create({
      name,
      avatar,
      whatsapp,
      bio,
    });
    const monitor_id = monitor.id;

    const classes = classesRepository.create({
      monitor_id,
      subject,
      cost,
    });
    const classe_id = classes.id;
    const class_shedule = classesScheduleRepository.create({
      classe_id,
      weekday,
      time_from,
      time_to,
    });
    await monitorRepository.save(monitor);
    await classesRepository.save(classes);
    await classesScheduleRepository.save(class_shedule);
    const test = {
      monitor,
      classes,
      class_shedule,
    };
    return res.json(test);
  }
}
export default MonitorController;
