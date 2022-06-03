import { getCustomRepository } from 'typeorm';
import Category from '../entities/Category';
import CategoryRepository from '../repositories/CategoryRepository';

class ListCategoryService {
  public async execute(): Promise<Category[]> {
    const CategorysRepository = getCustomRepository(CategoryRepository);

    return CategorysRepository.find({
      ativo:1
    });
  }
}

export default ListCategoryService;
