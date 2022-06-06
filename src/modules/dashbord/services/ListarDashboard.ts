import { createQueryBuilder, getCustomRepository } from 'typeorm';
import Producers from '../../producers/entities/Producers';
import DashboardRepository from '../repositories/DashboradRepository';

class ListProducersService {
  public async execute(): Promise<Producers[]> {
    const ProducerssRepository = getCustomRepository(DashboardRepository);
    
    const result = await ProducerssRepository.query(`
      SELECT SUM(hectares) FROM producers AS total;
    `);
    
    let fazenda = await ProducerssRepository
    .createQueryBuilder('producers')
    .select('SUM(producers.hectares)', 'count')
    .addSelect('SUM(producers.total_fazenda)', 'sum')
    .addSelect('producers.estado')
    .groupBy('producers.id,producers.estado')
    .getRawMany();
    



    const dados = {
        total_fazenda:await ProducerssRepository.count({ where:{ativo:1}  }),
        total_hectares:await ProducerssRepository
        .createQueryBuilder('producers')
        .select('SUM(producers.total_fazenda)', 'total_hectares')        
        .getRawMany(),
        estado:await ProducerssRepository.createQueryBuilder('producers')
        .select('producers.estado', 'estado')
        .groupBy('producers.estado')
        .getRawMany(),
        total:await ProducerssRepository.createQueryBuilder('producers')
        .select('SUM()', 'plantacao')
        .groupBy('producers.estado')
        .getRawMany(),
      
    };
    console.log(dados);
    return fazenda;
  }  
}

export default ListProducersService;
