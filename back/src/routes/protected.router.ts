import express from 'express';
import { authenticateToken } from '../middleware/auth'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta protegida de ejemplo
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Usuario logeado', user: req.body.user });
});

export default router;
