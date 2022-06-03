import { getCustomRepository } from 'typeorm';
import Product from '../entities/Products';
import ProductRepository from '../repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    return productsRepository.find({
      ativo:1
    });
  }
}

export default ListProductService;
