import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response>{
        const {name,email,telefone,senha} = request.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            email,
            telefone,
            senha,
            ativo:1
        });

        return response.json({status:"false",user});
    }
}