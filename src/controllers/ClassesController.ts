import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import ClassesRepository from '../repositories/ClassesRepository';

class ClassesController {
  async create(req: Request, res: Response): Promise<any> {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;
    res.json({ status: 'OK' });
    const classesRepository = getCustomRepository(ClassesRepository);

    schedule.map(
      async (item: { week_day: number; from: string; to: string }) => {
        const classes = classesRepository.create({
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost,
          weekday: item.week_day,
          time_from: Number(item.from.slice(0, 2)),
          time_to: Number(item.to.slice(0, 2)),
        });
        await classesRepository.save(classes);
      },
    );
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
      item => item.time_from >= Number(filters.time?.slice(0, 2)),
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
