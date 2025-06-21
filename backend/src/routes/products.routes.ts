import { Router } from "express";
import ProductsController from "../controller/ProductsController";

export const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', (req, res) => productsController.getProducts(req, res));
productsRouter.get('/:id', productsController.getProductById.bind(productsController));
productsRouter.get('/category/:category', productsController.getProductByCategory.bind(productsController));
productsRouter.get('/category/:category/price-asc', productsController.getProductByPriceAsc.bind(productsController));






