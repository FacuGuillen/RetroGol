import {Router} from "express";
import {productsRouter} from "./products.routes"
//import {usersRouter} from "./users.routes"


export class AppRoutes {
    static get routes():Router{
        const router = Router();

        router.use ('/api/products', productsRouter)
        

        return router;
    }
}