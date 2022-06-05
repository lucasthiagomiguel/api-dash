import { Router } from "express";
import Producers from "../controllers/ProducersControllers";

const producersRouter = Router();
const Producer = new Producers();

producersRouter.get(
  '/',
  Producer.index,
);
producersRouter.get(
  '/:id',
  Producer.show,
);
producersRouter.put(
  '/:id',
  Producer.update,
);
producersRouter.delete(
  '/:id',
  Producer.delete,
);
producersRouter.post(
  '/',
  Producer.create,
);
  export default producersRouter;