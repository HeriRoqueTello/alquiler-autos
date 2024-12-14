// src/routes/vehiculoRoutes.ts
import { Router } from 'express';
import { getUsers, createUser, loginUser, getUserById, getUsersByRole, updateUser, deleteUser, updateRole } from '../controllers/usuario.controller';

const router = Router();

router.get('/users', getUsers);
router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/users/:id', updateRole);
router.get('/users/:id', getUserById);
router.get('/users/rol/:rol', getUsersByRole);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


export default router;