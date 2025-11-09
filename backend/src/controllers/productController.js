import productService from '../services/productService.js';

export const getAllProducts = async(req,res,next) =>{
    try{
        const products = await productService.getAll();
        res.json(products);
    }
    catch(error){
        next(error);
    }
};

