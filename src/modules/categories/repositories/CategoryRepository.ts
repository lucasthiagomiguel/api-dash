import { EntityRepository, Repository } from "typeorm";
import Category  from "../entities/Category";


@EntityRepository(Category)
export default class CategoryRepository extends Repository<Category>{
    public async findByName(name: string): Promise<Category | undefined>{
        const Category = await this.findOne({
            where:{
                name,
            }
        });
        return Category;
    }

    public async findById(id: number): Promise<Category | undefined>{
        const Category = await this.findOne({
            where:{
                id,
            }
        });
        return Category;
    }    
   
}