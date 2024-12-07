// src/controllers/vehiculoController.ts
import { Request, Response } from 'express';
import { Vehiculo } from '../models/Vehiculo';

export const getVehiculos = async (req: Request, res: Response) => {

  try {
    const vehiculos = await Vehiculo.find();
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createVehiculo = async (req: Request, res: Response) => {

  try {
    const newVehiculo = new Vehiculo(req.body);
    const savedVehiculo = await newVehiculo.save();
    res.json(savedVehiculo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
