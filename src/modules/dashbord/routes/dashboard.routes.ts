import { Router } from "express";
import Dashboard from "../controllers/Dashboard";

const DashboardRouter = Router();
const Dashboards = new Dashboard();

DashboardRouter.get(
  '/',
  Dashboards.index,
);
  export default DashboardRouter;