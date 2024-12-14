import { CreateUsuarioDto, Usuario } from "../types/Usuario.types";
import axiosInstance from "./axiosInstance.service";

const URL = "/auth/users";

export const getAllUsuarios = async (): Promise<Usuario[]> => {
  const { data } = await axiosInstance.get(URL);
  return data;
};
export const getUsuario = async (id: string) => {
  const { data } = await axiosInstance.get(`${URL}/${id}`);
  return data;
};
export const registerUsuario = async (usuario: CreateUsuarioDto) => {
  const { data } = await axiosInstance.post('/auth/register', usuario);
  return data;
};
export const updateUsuario = async (id: string, usuario: CreateUsuarioDto) => {
  const { data } = await axiosInstance.put(`${URL}/${id}`, usuario);
  return data;
};

export const updateRolUsuario = async (id: string, rol: string) => {
  const { data } = await axiosInstance.post(`${URL}/${id}`, { rol });
  return data;
}

export const deleteUsuario = async (id: string) => {
  return axiosInstance.delete(`${URL}/${id}`);
};
export const loginUsuario = async (email: string, password: string) => {
  const { data } = await axiosInstance.post("/auth/login", { email, password });
  return data;
};
export const getUsuariosByRol = async (rol: string) => {
  const { data } = await axiosInstance.get(`${URL}/rol/${rol}`);
  return data;
};
export const getProfile = async () => {
  const { data } = await axiosInstance.get("/auth/profile");
  return data;
};