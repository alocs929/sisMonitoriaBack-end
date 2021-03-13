import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { MoneytariaRepository } from '../repositories/MoneytoriaRepository';

class MoneytoriaController {
  async create(req: Request, res:Response) {
    const { nome , avatar , whatsapp , bio }  = req.body;

    const moneytoriaRepository = getCustomRepository(MoneytariaRepository);

    const moneytoria = moneytoriaRepository.create({
      nome , avatar , whatsapp , bio
    });

    await moneytoriaRepository.save(moneytoria);

    return res.json(moneytoria);
  }
}
export { MoneytoriaController };
