"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const prisma_1 = require("./generated/prisma"); // O la ruta que uses realmente
exports.prisma = new prisma_1.PrismaClient();
