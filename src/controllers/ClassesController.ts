import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ClassesRepository from '../repositories/classesRepository';
import ShowClassesService from '../services/ShowClassesService';
import convertHourToMinutes from '../utils/convertHourToMinutes';

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
    //const showClassesService = new ShowClassesService();
    /*
    const filters = request.query;
    const subject = filters.subject as string;
    const weekday = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.weekday || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes',
      });
    }

    showClassesService.execute();

    // console.log(search);

        const timeInMinutes = convertHourToMinutes(time);
    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);
  */
    // return response.send(classes);
    return response.send({ ok: true });
  }
}
export default ClassesController;
