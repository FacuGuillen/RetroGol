"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
class ProductsController {
    constructor() {
        console.log("Producto Controller");
    }
    getProducts(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield prisma_1.prisma.products.findMany();
                res.status(200).json(products);
            }
            catch (e) {
                res.status(500).json({ message: "Error", error: e });
            }
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield prisma_1.prisma.products.findUnique({
                    where: { id_products: Number(id) } // Ajustá si el campo es otro
                });
                if (!product) {
                    return res.status(404).json({ message: "Producto no encontrado" });
                }
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json({ message: "Error", error: e });
            }
        });
    }
}
exports.default = ProductsController;
