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
  
    var total_hectares = await ProducerssRepository
    .createQueryBuilder('producers')
    .select('SUM(producers.hectares)','total_hectares')        
    .getRawMany();

    var total_agricultavel = await ProducerssRepository.createQueryBuilder('producers')
    .select('SUM(area_agricultavel)', 'area_agricultavel')
    .getRawMany();

    var total_vegetacao = await ProducerssRepository.createQueryBuilder('producers')
    .select('SUM(area_vegetacao)', 'area_vegetacao')
    .getRawMany();


    const fazenda = {
        total_fazenda:await ProducerssRepository.count({ where:{ativo:1}  }),
        total_hectares:total_hectares[0].total_hectares,
        estado:await ProducerssRepository.createQueryBuilder('producers')
        .select('producers.estado', 'estado')
        .addSelect('count(id)','total_estado')
        .groupBy('producers.estado')
        .getRawMany(),
        total_agricultavel:total_agricultavel[0].area_agricultavel,
        total_vegetacao:total_vegetacao[0].area_vegetacao,
        total_plantacao:await ProducerssRepository.createQueryBuilder('producers')
        .select('plantacao', 'total_plantacao')
        .addSelect('count(id)','total')
        .groupBy('producers.plantacao')
        .getRawMany()
      
    };
    console.log(fazenda);
    return fazenda;
  }  
}

export default ListProducersService;
