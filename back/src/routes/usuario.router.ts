// src/routes/vehiculoRoutes.ts
import { Router } from 'express';
import { getUsers, createUser, loginUser, getUserById, getUsersByRole, updateUser, deleteUser } from '../controllers/usuario.controller';

const router = Router();

router.get('/list', getUsers);
router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/users/:id', getUserById);
router.get('/users-by-rol/:rol', getUsersByRole);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


export default router;