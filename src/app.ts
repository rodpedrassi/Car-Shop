import express from 'express';
import ErrorHandler from './middlewares/ErrorMiddleware';
import CarRoutes from './Routes/CarRoutes';

const app = express();
app.use(express.json());
app.use(CarRoutes);
app.use(ErrorHandler.errorMiddleware);

export default app;
