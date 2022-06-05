import { getCustomRepository } from 'typeorm';
import Producers from '../entities/Producers';
import ProducersRepository from '../repositories/ProducersRepository';

class ListProducersService {
  public async execute(): Promise<Producers[]> {
    const ProducerssRepository = getCustomRepository(ProducersRepository);

    return ProducerssRepository.find({
      ativo:1
    });
  }
}

export default ListProducersService;
