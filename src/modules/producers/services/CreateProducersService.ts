import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import  Producers  from '../entities/Producers';
import  ProducersRepository  from '../repositories/ProducersRepository';


interface IRequest {
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

class CreateProducerservice {
  public async execute({ name,name_fazenda,cpf_cnpj,estado,hectares,area_agricultavel,area_vegetacao,plantacao,total_fazenda }: IRequest): Promise<Producers> {
    var total_fazenda = hectares * 10000;
    const areaTotal = area_agricultavel + area_vegetacao;
    if(areaTotal > total_fazenda){
      throw new AppError('NAO POODE CADASTRAR, AREA TOTAL MENOR QUE A PLANTACAO');
    }
    const ProductRepository = getCustomRepository(ProducersRepository);

    if (!Producers) {
      throw new AppError('Producers not found.');
    }

    const ProducersExists = await ProductRepository.findOne({cpf_cnpj:cpf_cnpj});

    if (ProducersExists) {
      throw new AppError('There is already one Producers with this CPF or CNPJ');
    }
  

    const Product = ProductRepository.create({
      name,
      name_fazenda,
      cpf_cnpj,
      estado,
      hectares,
      area_agricultavel,
      area_vegetacao,
      plantacao,
      total_fazenda,//area total da fazenda
      ativo: 1
    })

    await ProductRepository.save(Product);
    return Product;
  }
}

export default CreateProducerservice;