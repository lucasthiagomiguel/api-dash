import { getCustomRepository } from 'typeorm';
import  Producers  from '../entities/Producers';
import  ProducersRepository  from '../repositories/ProducersRepository';


interface IRequest {
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

class CreateProducerservice {
  public async execute({ name,name_fazenda,cpf_cnpj,estado,hectares,area_agricultável,area_vegetação,plantacao }: IRequest): Promise<Producers> {
    const ProductRepository = getCustomRepository(ProducersRepository);

    const Product = ProductRepository.create({
      name,
      name_fazenda,
      cpf_cnpj,
      estado,
      hectares,
      area_agricultável,
      area_vegetação,
      plantacao,
      ativo: 1
    })

    await ProductRepository.save(Product);
    return Product;
  }
}

export default CreateProducerservice;