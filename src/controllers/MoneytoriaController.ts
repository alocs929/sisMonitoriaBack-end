import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { MoneytariaRepository } from '../repositories/MoneytoriaRepository';

class MoneytoriaController {
  async create(request: Request, response: Response): Promise<Response> {
    const { nome, avatar, whatsapp, bio } = request.body;

    const moneytoriaRepository = getCustomRepository(MoneytariaRepository);

    const moneytoria = moneytoriaRepository.create({
      nome,
      avatar,
      whatsapp,
      bio,
    });

    await moneytoriaRepository.save(moneytoria);

    return response.json(moneytoria);
  }
}
export default MoneytoriaController;
