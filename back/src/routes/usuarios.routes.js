import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  getUsuario,
  getUsuarios,
  updateUsuario,
} from "../controllers/usuarios.controller.js";

const router = Router();

// GET all Usuarios
router.get("/usuarios", getUsuarios);

// GET An Usuario
router.get("/usuarios/:id", getUsuario);

// DELETE An Usuario
router.delete("/usuarios/:id", deleteUsuario);

// INSERT An Usuario
router.post("/usuarios", createUsuario);

router.patch("/usuarios/:id", updateUsuario);

export default router;
