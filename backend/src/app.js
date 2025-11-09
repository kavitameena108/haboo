import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();

app.use(express.json());
app.use(cors());


//Routes
app.use('/api/products', productRoutes);
app.use('api/users',userRoutes);

//Error Handling
app.use(errorMiddleware);

export default app;