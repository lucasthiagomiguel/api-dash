import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../entities/Products';
import ProductRepository from '../repositories/ProductsRepository';

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

class UpdateProductService {
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
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with this name');
    }

    // const redisCache = new RedisCache();

    

    product.name = name;
    product.name_fazenda = name_fazenda;
    product.cpf_cnpj = cpf_cnpj;
    product.estado = estado;
    product.hectares = hectares;
    product.area_agricultável = area_agricultável;
    product.area_vegetação = area_vegetação;
    product.plantacao = plantacao;
    product.ativo = ativo;
    

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
