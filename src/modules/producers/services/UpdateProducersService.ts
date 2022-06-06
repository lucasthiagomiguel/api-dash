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
  area_agricultavel:number,
  area_vegetacao:number,
  plantacao:string,
  total_fazenda:number,
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
    area_agricultavel,
    area_vegetacao,
    plantacao,
    ativo,
  }: IRequest): Promise<Producers> {
    const ProducerssRepository = getCustomRepository(ProducersRepository);

    const Producers = await ProducerssRepository.findOne(id);

    if (!Producers) {
      throw new AppError('Producers not found.');
    }

    
    // const redisCache = new RedisCache();

    

    Producers.name = name;
    Producers.name_fazenda = name_fazenda;
    Producers.cpf_cnpj = cpf_cnpj;
    Producers.estado = estado;
    Producers.hectares = hectares;
    Producers.area_agricultavel = area_agricultavel * 10000;
    Producers.area_vegetacao = area_vegetacao * 10000;
    Producers.plantacao = plantacao;
    Producers.total_fazenda = hectares * 10000;//area total da fazenda
    Producers.ativo = ativo;
    

    await ProducerssRepository.save(Producers);

    return Producers;
  }
}

export default UpdateProducersService;
