"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const products_routes_1 = require("./products.routes");
//import {usersRouter} from "./users.routes"
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/products', products_routes_1.productsRouter);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
