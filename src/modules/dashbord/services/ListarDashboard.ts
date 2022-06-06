import { createQueryBuilder, getCustomRepository } from 'typeorm';
import Producers from '../../producers/entities/Producers';
import DashboardRepository from '../repositories/DashboradRepository';

class ListProducersService {
  public async execute(): Promise<Producers[] | any> {
    const ProducerssRepository = getCustomRepository(DashboardRepository);
    
    const result = await ProducerssRepository.query(`
      SELECT SUM(hectares) FROM producers AS total;
    `);
    
    // let fazenda = await ProducerssRepository
    // .createQueryBuilder('producers')
    // .select('SUM(producers.hectares)', 'count')
    // .addSelect('SUM(producers.total_fazenda)', 'sum')
    // .addSelect('producers.estado')
    // .groupBy('producers.id,producers.estado')
    // .getRawMany();
  


    const fazenda = {
        total_fazenda:await ProducerssRepository.count({ where:{ativo:1}  }),
        total_hectares:await ProducerssRepository
        .createQueryBuilder('producers')
        .select('SUM(producers.total_fazenda)', 'total_hectares')        
        .getRawMany(),
        estado:await ProducerssRepository.createQueryBuilder('producers')
        .select('producers.estado', 'estado')
        .groupBy('producers.estado')
        .getRawMany(),
        total_agricultavel:await ProducerssRepository.createQueryBuilder('producers')
        .select('SUM(area_agricultavel)', 'area_agricultavel')
        .getRawMany(),
        total_vegetacao:await ProducerssRepository.createQueryBuilder('producers')
        .select('SUM(area_vegetacao)', 'area_vegetacao')
        .getRawMany(),
        total_plantacao:await ProducerssRepository.createQueryBuilder('producers')
        .select('plantacao', 'total_plantacao')
        .groupBy('producers.plantacao')
        .getRawMany()
      
    };
    console.log(fazenda);
    return fazenda;
  }  
}

export default ListProducersService;
