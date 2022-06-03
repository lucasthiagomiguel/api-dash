import { Request, Response } from "express";
import CreateCategoryService from "../services/CreateCategoryService";
import ListCategoryService from '../services/ListCategoryService';
import ShowCategoryService from '../services/ShowCategoryService';
import UpdateCategoryService from '../services/UpdateCategoryService';
import DeleteCategoryService from '../services/DeleteCategoryService';

export default class CategoryController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listCategory = new ListCategoryService();

        const category = await listCategory.execute();

        return response.json(category);
    }
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const showProduct = new ShowCategoryService();
    
        const product = await showProduct.execute({ id });
    
        return response.json(product);
      }
    public async create(request: Request, response: Response): Promise<Response>{
        const {name,description} = request.body;
        const createCategory = new CreateCategoryService();
        const Category = await createCategory.execute({
            name,
            description,
            ativo:1
        });

        return response.json({status:"false",Category});
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const {name,description,ativo} = request.body;
        const { id } = request.params;
    
        const updateProduct = new UpdateCategoryService();
    
        const product = await updateProduct.execute({
            id,
            name,
            description,
            ativo
        });
    
        return response.json(product);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const updateProduct = new DeleteCategoryService();
    
        const product = await updateProduct.execute({
            id,
            ativo:0
        });
    
        return response.json(product);
    }
    
}