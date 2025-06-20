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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const routes_routes_1 = require("../routes/routes.routes"); // ✅ Importá tus rutas
class Server {
    constructor(options) {
        this.app = (0, express_1.default)();
        this.port = options.port;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use(express_1.default.json()); // Por si necesitás parsear JSON
            this.app.use(routes_routes_1.AppRoutes.routes); // ✅ Usa tus rutas acá
            this.app.listen(this.port, () => {
                console.log("Servidor corriendo en puerto " + this.port);
            });
        });
    }
}
exports.Server = Server;
