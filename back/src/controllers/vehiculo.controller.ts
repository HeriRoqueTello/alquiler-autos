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

export const getVehiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findById(id);
    res.json(vehiculo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const updateVehiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedVehiculo = await Vehiculo.findByIdAndUpdate(id, req.body as typeof Vehiculo, { new: true });
    res.json(updatedVehiculo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const deleteVehiculo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Vehiculo.findByIdAndDelete(id);
    res.json({ message: 'Vehiculo deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

