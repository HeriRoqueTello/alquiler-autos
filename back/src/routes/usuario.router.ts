// src/routes/vehiculoRoutes.ts
import { Router } from 'express';
import { getUsers, createUser, loginUser } from '../controllers/usuario.controller';

const router = Router();

router.get('/list', getUsers);
router.post('/register', createUser);
router.post('/login', loginUser);

export default router;