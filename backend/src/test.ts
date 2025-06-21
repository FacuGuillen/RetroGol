import { PrismaClient } from './generated/prisma'; // ✅ Ruta real


const prisma = new PrismaClient();

async function main() {
  const category = await prisma.category.findMany(); // Asegurate de que el modelo se llama "producto"
  console.log(category);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());