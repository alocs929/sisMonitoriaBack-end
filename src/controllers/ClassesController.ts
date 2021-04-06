import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import ClassesRepository from '../repositories/ClassesRepository';

class ClassesController {
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
    res.json({ status: 'OK' });
    const classesRepository = getCustomRepository(ClassesRepository);
    const classes = classesRepository.create({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      weekday,
      time_from,
      time_to,
    });
    await classesRepository.save(classes);
  }

  async index(request: Request, response: Response): Promise<any> {
    const filters = request.query;

    const classesRepository = getCustomRepository(ClassesRepository);

    if (!filters.weekday || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes',
      });
    }

    const listCourses = await classesRepository.find();

    const listFilterWeek = listCourses.filter(
      item => item.weekday === Number(filters.weekday),
    );

    const listFilterSubject = listFilterWeek.filter(
      item => item.subject === filters.subject,
    );

    const listFilterTime = listFilterSubject.filter(
      item => item.time_from >= Number(filters.time),
    );

    if (!listFilterTime.length) {
      return response.status(404).json({
        error: 'Nada encontrado',
      });
    }

    return response.send(listFilterTime);
  }
}
export default ClassesController;
