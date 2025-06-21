"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const ProductsController_1 = __importDefault(require("../controller/ProductsController"));
exports.productsRouter = (0, express_1.Router)();
const productsController = new ProductsController_1.default();
exports.productsRouter.get('/', (req, res) => productsController.getProducts(req, res));
exports.productsRouter.get('/:id', (req, res) => productsController.getProductById(req, res));
