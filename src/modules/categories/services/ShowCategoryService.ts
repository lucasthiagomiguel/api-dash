import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Category from '../entities/Category';
import CategoryRepository from '../repositories/CategoryRepository';

interface IRequest {
  id: string;
}

class ShowCategoryervice {
  public async execute({ id }: IRequest): Promise<Category> {
    const CategoryRepositories = getCustomRepository(CategoryRepository);

    const Category = await CategoryRepositories.findOne(id);

    if (!Category) {
      throw new AppError('Category not found.');
    }

    return Category;
  }
}

export default ShowCategoryervice;
