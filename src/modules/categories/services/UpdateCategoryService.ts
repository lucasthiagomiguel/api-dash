import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Category from '../entities/Category';
import CategoryRepository from '../repositories/CategoryRepository';

interface IRequest {
  id:string,
  name: string,
  description:string,
  ativo: number,
}

class UpdateCategoryService {
  public async execute({
    id,
    name,
    description,
    ativo
  }: IRequest): Promise<Category> {
    const CategoryRepositories = getCustomRepository(CategoryRepository);

    const Category = await CategoryRepositories.findOne(id);

    if (!Category) {
      throw new AppError('Category not found.');
    }

    const CategoryExists = await CategoryRepositories.findByName(name);

    if (CategoryExists) {
      throw new AppError('There is already one Category with this name');
    }

    // const redisCache = new RedisCache();

    

    Category.name = name;
    Category.description = description;
    Category.ativo = ativo;
    

    await CategoryRepositories.save(Category);

    return Category;
  }
}

export default UpdateCategoryService;
