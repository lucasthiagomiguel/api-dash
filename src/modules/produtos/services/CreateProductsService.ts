import { getCustomRepository } from 'typeorm';
import  Products  from '../entities/Products';
import  ProductsRepository  from '../repositories/ProductsRepository';


interface IRequest {
  name: string,
  name_fazenda: string,
  cpf_cnpj:string,
  estado:string,
  hectares :number,
  area_agricultável:number,
  area_vegetação:number,
  plantacao:string,
  ativo: number
}

class CreateProductService {
  public async execute({ name,name_fazenda,cpf_cnpj,estado,hectares,area_agricultável,area_vegetação,plantacao }: IRequest): Promise<Products> {
    const ProductRepository = getCustomRepository(ProductsRepository);

    const Product = ProductRepository.create({
      name,
      name_fazenda,
      cpf_cnpj,
      estado,
      hectares,
      area_agricultável,
      area_vegetação,
      plantacao,
      ativo: 1
    })

    await ProductRepository.save(Product);
    return Product;
  }
}

export default CreateProductService;