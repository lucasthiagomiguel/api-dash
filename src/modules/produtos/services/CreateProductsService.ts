import { getCustomRepository } from 'typeorm';
import  Products  from '../entities/Products';
import  ProductsRepository  from '../repositories/ProductsRepository';


interface IRequest {
  name: string,
  price: string,
  variety: string,
  topSellers: string,
  image: string,
  category: boolean,
  more18: boolean,
  description:string,
  ativo: number
}

class CreateProductService {
  public async execute({ name,price,variety,topSellers,image,category,more18,description }: IRequest): Promise<Products> {
    const ProductRepository = getCustomRepository(ProductsRepository);

    const Product = ProductRepository.create({
      name,
      price,
      variety,
      topSellers,
      image,
      category,
      more18,
      description,
      ativo: 1
    })

    await ProductRepository.save(Product);
    return Product;
  }
}

export default CreateProductService;