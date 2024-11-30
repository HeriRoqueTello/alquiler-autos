import { Router } from "express";
import {
  createVehiculo,
  deleteVehiculo,
  getVehiculo,
  getVehiculos,
  updateVehiculo,
} from "../controllers/vehiculos.controller.js";

const router = Router();

// GET all Vehiculos
router.get("/vehiculos", getVehiculos);

// GET An Vehiculo
router.get("/vehiculos/:id", getVehiculo);

// DELETE An Vehiculo
router.delete("/vehiculos/:id", deleteVehiculo);

// INSERT An Vehiculo
router.post("/vehiculos", createVehiculo);

router.patch("/vehiculos/:id", updateVehiculo);

export default router;
