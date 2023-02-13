import express from 'express';
import CarRoutes from './Routes/CarRoutes';

const app = express();
app.use(express.json());
app.use(CarRoutes);

export default app;
