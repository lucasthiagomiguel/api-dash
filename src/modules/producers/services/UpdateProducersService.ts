import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Producers from '../entities/Producers';
import ProducersRepository from '../repositories/ProducersRepository';

interface IRequest {
  id:string,
  name: string,
  name_fazenda: string,
  cpf_cnpj:string,
  estado:string,
  hectares :number,
  area_agricultável:number,
  area_vegetação:number,
  plantacao:string,
  ativo: number
}

class UpdateProducersService {
  public async execute({
    id,
    name,
    name_fazenda,
    cpf_cnpj,
    estado,
    hectares,
    area_agricultável,
    area_vegetação,
    plantacao,
    ativo,
  }: IRequest): Promise<Producers> {
    const ProducerssRepository = getCustomRepository(ProducersRepository);

    const Producers = await ProducerssRepository.findOne(id);

    if (!Producers) {
      throw new AppError('Producers not found.');
    }

    const ProducersExists = await ProducerssRepository.findByName(name);

    if (ProducersExists) {
      throw new AppError('There is already one Producers with this name');
    }

    // const redisCache = new RedisCache();

    

    Producers.name = name;
    Producers.name_fazenda = name_fazenda;
    Producers.cpf_cnpj = cpf_cnpj;
    Producers.estado = estado;
    Producers.hectares = hectares;
    Producers.area_agricultável = area_agricultável;
    Producers.area_vegetação = area_vegetação;
    Producers.plantacao = plantacao;
    Producers.ativo = ativo;
    

    await ProducerssRepository.save(Producers);

    return Producers;
  }
}

export default UpdateProducersService;
