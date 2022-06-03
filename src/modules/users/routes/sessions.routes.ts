import { Router } from "express";
import SessionsController from "../controllers/SessionsController";


const sessionrRouter = Router();
const sessionsController = new SessionsController();

sessionrRouter.post(
    '/',sessionsController.create,
  );
  export default sessionrRouter;