import { Router } from "express";
import Categorys from "../controllers/CategoryControllers";

const CategoryrRouter = Router();
const Category = new Categorys();

CategoryrRouter.get(
  '/',
  Category.index,
);
CategoryrRouter.get(
  '/:id',
  Category.show,
);
CategoryrRouter.put(
  '/:id',
  Category.update,
);
CategoryrRouter.delete(
  '/:id',
  Category.delete,
);
CategoryrRouter.post(
  '/',
  Category.create,
);
  export default CategoryrRouter;