import express from 'express';
import "dotenv/config";
import cors from 'cors';
import { connectDB } from './config/db';
import vehiculoRoutes from './routes/vehiculo.router';
import usuarioRoutes from './routes/usuario.router';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', [vehiculoRoutes]);
app.use('/auth', [usuarioRoutes]);

export default app;