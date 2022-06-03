import { Request,Response } from "express";
import CreateSessionService from "../services/CreateSessionsServices";

export default class SessionsController {
    public async create(request: Request, response: Response): Promise<Response>{
        const {email, senha} = request.body;
        const createSession = new CreateSessionService();
        const user = await createSession.execute({
            email,
            senha,
        });
        return response.json(user);
    }
}