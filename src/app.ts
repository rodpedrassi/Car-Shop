import express from 'express';
import ErrorHandler from './middlewares/ErrorMiddleware';
import CarRoutes from './Routes/CarRoutes';
import MotorRoutes from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use(CarRoutes);
app.use(MotorRoutes);
app.use(ErrorHandler.errorMiddleware);

export default app;
