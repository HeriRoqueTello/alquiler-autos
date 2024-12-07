import { Vehiculo } from "../types";
import axiosInstance from "./axiosInstance";

export const getAllVehiculos = () => axiosInstance.get("/api/vehiculos");
export const getVehiculo = (id: string) => axiosInstance.get(`/api/vehiculos/${id}`);
export const createVehiculo = (vehiculo: Vehiculo) => axiosInstance.post("/api/vehiculos", vehiculo);
export const updateVehiculo = (id: string, vehiculo: Vehiculo) => axiosInstance.put(`/api/vehiculos/${id}`, vehiculo);
export const deleteVehiculo = (id: string) => axiosInstance.delete(`/api/vehiculos/${id}`);
