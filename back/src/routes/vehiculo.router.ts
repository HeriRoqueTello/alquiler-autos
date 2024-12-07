// src/routes/vehiculoRoutes.ts
import { Router } from 'express';
import { getVehiculos, createVehiculo, deleteVehiculo, updateVehiculo, getVehiculo } from '../controllers/vehiculo.controller';

const router = Router();

router.get('/vehiculos', getVehiculos);
router.post('/vehiculos', createVehiculo);
router.get('/vehiculos/:id', getVehiculo);
router.put('/vehiculos/:id', updateVehiculo);
router.delete('/vehiculos/:id', deleteVehiculo);

export default router;
