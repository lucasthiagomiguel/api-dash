import { Request, Response } from "express";
import ListarDashboard from '../services/ListarDashboard';

export default class DashboardController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listDashboard = new ListarDashboard();

        const Dashboard = await listDashboard.execute();

        return response.json(Dashboard);
    }    
}