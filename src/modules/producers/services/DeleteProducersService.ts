import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../repositories/ProducersRepository';
import Producers from '../entities/Producers';

interface IRequest {
  id: string;
  ativo:number
}

class DeleteProducersService {
  public async execute({
    id
  }: IRequest): Promise<Producers> {
    const ProducerRepository = getCustomRepository(ProductRepository);

    const Producers = await ProducerRepository.findOne(id);

    if (!Producers) {
      throw new AppError('Producers not found.');
    }

    // const redisCache = new RedisCache();

    Producers.ativo = 0;
    

    await ProducerRepository.save(Producers);

    return Producers;
  }
}

export default DeleteProducersService;
