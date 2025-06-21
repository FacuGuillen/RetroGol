import {Request, Response} from 'express';
import {prisma} from "../prisma";

class ProductsController {
    constructor() {
        console.log("Producto Controller");
    }



    public async getProducts (_req: Request, res: Response) {
        try {
            const products = await prisma.products.findMany()
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json({message: "Error", error: e})
        }
    }



    public async getProductById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const product = await prisma.products.findUnique({
            where: { id_products: Number(id) } // Ajustá si el campo es otro
        });

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: "Error", error: e });
    }
}


public async getProductByCategory(req: Request, res: Response) {
    try {
    const { category } = req.params;

    const products = await prisma.products.findMany({
        where: {
            category: {
            name: category
        }
        }
    });

    if (products.length === 0) {
        return res.status(404).json({ message: "No hay productos para esa categoría" });
    }

    res.status(200).json(products);
    } catch (e) {
        res.status(500).json({ message: "Error", error: e });
    }
}


public async getProductByPriceAsc(req: Request, res: Response) {
  try {
    const { category } = req.params;

    const products = await prisma.products.findMany({
      where: {
        category: {
          name: category
        }
      },
      orderBy: {
        price: 'asc' // Orden ascendente por precio
      }
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No hay productos para esa categoría" });
    }

    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: "Error", error: e });
  }
}




}

export default ProductsController;