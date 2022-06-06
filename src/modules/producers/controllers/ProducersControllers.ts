import { Request, Response } from "express";
import CreateProducService from "../services/CreateProducersService";
import ListProducerService from '../services/ListProducersService';
import ShowProducerService from '../services/ShowProducersService';
import UpdateProducerService from '../services/UpdateProducersService';
import DeleteProducerService from '../services/DeleteProducersService';

export default class ProducersController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listProducers = new ListProducerService();

        const Producers = await listProducers.execute();

        return response.json(Producers);
    }
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const showProduct = new ShowProducerService();
    
        const product = await showProduct.execute({ id });
    
        return response.json(product);
      }
    public async create(request: Request, response: Response): Promise<Response>{
        const {name,name_fazenda,cpf_cnpj,estado,hectares,area_agricultavel,area_vegetacao,plantacao} = request.body;
        const createProduc = new CreateProducService();
        const Produc = await createProduc.execute({
            name,
            name_fazenda,
            cpf_cnpj,
            estado,
            hectares,
            area_agricultavel,
            area_vegetacao,
            plantacao,
            total_fazenda:hectares * 10000,//area total da fazenda
            ativo:1
        });

        return response.json({status:"false",Produc});
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const {name,name_fazenda,cpf_cnpj,estado,hectares,area_agricultavel,area_vegetacao,plantacao,ativo} = request.body;
        const { id } = request.params;
    
        const updateProduct = new UpdateProducerService();
    
        const product = await updateProduct.execute({
            id,
            name,
            name_fazenda,
            cpf_cnpj,
            estado,
            hectares,
            area_agricultavel,
            area_vegetacao,
            plantacao,
            total_fazenda:hectares * 10000,//area total da fazenda
            ativo
        });
    
        return response.json(product);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const updateProduct = new DeleteProducerService();
    
        const product = await updateProduct.execute({
            id,
            ativo:0
        });
    
        return response.json(product);
    }
    
}