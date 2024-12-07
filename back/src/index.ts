// src/index.ts
import express from 'express';
import vehiculoRoutes from './routes/vehiculo.router';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 2222;
app.use(cors());

app.use(express.json());
app.use('/api', vehiculoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
