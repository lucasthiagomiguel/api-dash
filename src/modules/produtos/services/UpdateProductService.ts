import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../entities/Products';
import ProductRepository from '../repositories/ProductsRepository';

interface IRequest {
  id:string,
  name: string,
  price: string,
  variety: string,
  topSellers: string,
  image: string,
  category: boolean,
  more18: boolean,
  description:string,
  ativo: number,
}

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    variety,
    topSellers,
    image,
    category,
    more18,
    description,
    ativo
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
    product.price = price;
    product.variety = variety;
    product.topSellers = topSellers;
    product.image = image;
    product.category = category;
    product.more18 = more18;
    product.description = description;
    product.ativo = ativo;
    

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
