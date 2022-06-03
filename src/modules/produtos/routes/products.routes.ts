import { Router } from "express";
import Products from "../controllers/ProductsControllers";

const productrRouter = Router();
const Product = new Products();

productrRouter.get(
  '/',
  Product.index,
);
productrRouter.get(
  '/:id',
  Product.show,
);
productrRouter.put(
  '/:id',
  Product.update,
);
productrRouter.delete(
  '/:id',
  Product.delete,
);
productrRouter.post(
  '/',
  Product.create,
);
  export default productrRouter;