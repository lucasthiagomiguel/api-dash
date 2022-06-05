import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Producers from '../entities/Producers';
import ProducersRepository from '../repositories/ProducersRepository';

interface IRequest {
  id: string;
}

class ShowProducersService {
  public async execute({ id }: IRequest): Promise<Producers> {
    const ProducerssRepository = getCustomRepository(ProducersRepository);

    const Producers = await ProducerssRepository.findOne(id);

    if (!Producers) {
      throw new AppError('Producers not found.');
    }

    return Producers;
  }
}

export default ShowProducersService;
