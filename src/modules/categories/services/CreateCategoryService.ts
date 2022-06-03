import { getCustomRepository } from 'typeorm';
import  Category  from '../entities/Category';
import  CategoryRepository  from '../repositories/CategoryRepository';


interface IRequest {
  name: string,
  description: string,
  ativo: number
}

class CreateCategoryService {
  public async execute({ name,description}: IRequest): Promise<Category> {
    const CategoryRepositories = getCustomRepository(CategoryRepository);

    const Product = CategoryRepositories.create({
      name,
      description,
      ativo: 1
    })

    await CategoryRepositories.save(Product);
    return Product;
  }
}

export default CreateCategoryService;