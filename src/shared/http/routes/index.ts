import { Router } from "express";
import userRouter from "@modules/users/routes/users.routes";
import producersRouter from "@modules/producers/routes/producer.routes";
import sessionRouter from "@modules/users/routes/sessions.routes";
import dashboardRouter from "@modules/dashbord/routes/dashboard.routes";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', sessionRouter);
routes.use('/producers', producersRouter);
routes.use('/dashboard', dashboardRouter);

export default routes;