import prisma from '../config/db.js';

const productService ={
    getAll:async () => {
        return await prisma.product.findMany();
    }
};

export default productService;