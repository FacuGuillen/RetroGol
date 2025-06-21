import express from 'express';
import { AppRoutes } from '../routes/routes.routes'; // ✅ Importá tus rutas

interface Options {
    port: number;
}

export class Server {
    private app = express();
    private readonly port: number;

    constructor(options: Options) {
        this.port = options.port;
    }

    async start() {
        this.app.use(express.json()); // Por si necesitás parsear JSON
        this.app.use(AppRoutes.routes); // ✅ Usa tus rutas acá

        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto " + this.port);
        });
    }
}
