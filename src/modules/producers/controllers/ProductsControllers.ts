import { Request, Response } from "express";
import CreateProducService from "../services/CreateProductsService";
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

export default class ProductsController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();

        return response.json(products);
    }
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const showProduct = new ShowProductService();
    
        const product = await showProduct.execute({ id });
    
        return response.json(product);
      }
    public async create(request: Request, response: Response): Promise<Response>{
        const {name,name_fazenda,cpf_cnpj,estado,hectares,area_agricultável,area_vegetação,plantacao} = request.body;
        const createProduc = new CreateProducService();
        const Produc = await createProduc.execute({
            name,
            name_fazenda,
            cpf_cnpj,
            estado,
            hectares,
            area_agricultável,
            area_vegetação,
            plantacao,
            ativo:1
        });

        return response.json({status:"false",Produc});
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const {name,name_fazenda,cpf_cnpj,estado,hectares,area_agricultável,area_vegetação,plantacao,ativo} = request.body;
        const { id } = request.params;
    
        const updateProduct = new UpdateProductService();
    
        const product = await updateProduct.execute({
            id,
            name,
            name_fazenda,
            cpf_cnpj,
            estado,
            hectares,
            area_agricultável,
            area_vegetação,
            plantacao,
            ativo
        });
    
        return response.json(product);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const updateProduct = new DeleteProductService();
    
        const product = await updateProduct.execute({
            id,
            ativo:0
        });
    
        return response.json(product);
    }
    
}