import { CreateVehiculoDto, Vehiculo, VehiculoWithTarifas } from "@/types/Vehiculo.types";
import axiosInstance from "./axiosInstance.service";

const URL = "/api/vehiculos";

export const getAllVehiculos = async (): Promise<VehiculoWithTarifas[]> => {
  const { data } = await axiosInstance.get(URL)
  return data;
};
export const getVehiculo = (id: string) => axiosInstance.get(`${URL}/${id}`);
export const createVehiculo = async (vehiculo: CreateVehiculoDto): Promise<Vehiculo> => {
  const { data } = await axiosInstance.post(URL, vehiculo);
  return data;
};
export const updateVehiculo = async (id: string, vehiculo: CreateVehiculoDto): Promise<Vehiculo> => {
  const { data } = await axiosInstance.put(`${URL}/${id}`, vehiculo);
  return data;
}
export const deleteVehiculo = (id: string) => {
  return axiosInstance.delete(`${URL}/${id}`);
}
