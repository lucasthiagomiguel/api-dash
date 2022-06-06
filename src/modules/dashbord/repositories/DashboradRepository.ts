import { EntityRepository, Repository,createQueryBuilder,getRepository } from "typeorm";
import Products  from "../../producers/entities/Producers";


@EntityRepository(Products)
export default class DashboardRepository extends Repository<Products>{
    public async findById(id: number): Promise<Products | undefined>{
        const fazenda = await getRepository(Products)
        .createQueryBuilder("products")
        .where("products.id = :id")
        .getOne()
        return fazenda;
    } 

   
}