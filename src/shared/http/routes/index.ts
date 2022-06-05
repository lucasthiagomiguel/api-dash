import { Router } from "express";
import userRouter from "@modules/users/routes/users.routes";
import producersRouter from "@modules/producers/routes/producer.routes";
import sessionrRouter from "@modules/users/routes/sessions.routes";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', sessionrRouter);
routes.use('/producers', producersRouter);

export default routes;