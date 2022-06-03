import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CategoryRepository from '../repositories/CategoryRepository';
import Category from '../entities/Category';

interface IRequest {
  id: string;
  ativo:number
}

class DeleteCategoryervice {
  public async execute({
    id
  }: IRequest): Promise<Category> {
    const CategoryRepositories = getCustomRepository(CategoryRepository);

    const Category = await CategoryRepositories.findOne(id);

    if (!Category) {
      throw new AppError('Category not found.');
    }

    // const redisCache = new RedisCache();

    Category.ativo = 0;
    

    await CategoryRepositories.save(Category);

    return Category;
  }
}

export default DeleteCategoryervice;
