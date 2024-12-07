// src/routes/vehiculoRoutes.ts
import { Router } from 'express';
import { getVehiculos, createVehiculo } from '../controllers/vehiculo.controller';

const router = Router();

router.get('/vehiculos', getVehiculos);
router.post('/vehiculos', createVehiculo);

export default router;
