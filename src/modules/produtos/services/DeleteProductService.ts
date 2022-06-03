import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../repositories/ProductsRepository';
import Product from '../entities/Products';

interface IRequest {
  id: string;
  ativo:number
}

class DeleteProductService {
  public async execute({
    id
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    // const redisCache = new RedisCache();

    product.ativo = 0;
    

    await productsRepository.save(product);

    return product;
  }
}

export default DeleteProductService;
