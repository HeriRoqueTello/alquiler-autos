import express from 'express';
import "dotenv/config";
import cors from 'cors';
import { connectDB } from './config/db';
import vehiculoRoutes from './routes/vehiculo.router';
import usuarioRoutes from './routes/usuario.router';
import protectedRoutes from './routes/protected.router';

const app = express();

connectDB();

const origin = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(cors({
  origin: [origin, "http://localhost:3000"],
  credentials: true
}));
app.use(express.json());
app.use('/api', [vehiculoRoutes]);
app.use('/auth', [usuarioRoutes, protectedRoutes]);


export default app;