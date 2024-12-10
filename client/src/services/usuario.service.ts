import { Usuario } from "../types/Vehiculo.types";
import axiosInstance from "./axiosInstance.service";

export const getAllUsuarios = () => axiosInstance.get("/auth/list");
export const getUsuario = (id: string) => axiosInstance.get(`/auth/users/${id}`);
export const registerUsuario = (usuario: Usuario) => axiosInstance.post("/auth/register", usuario);
export const updateUsuario = (id: string, usuario: Usuario) => axiosInstance.put(`/auth/users/${id}`, usuario);
export const deleteUsuario = (id: string) => axiosInstance.delete(`/auth/users/${id}`);
export const loginUsuario = (usuario: Usuario) => axiosInstance.post("/auth/login", usuario);
export const getUsuariosByRol = (rol: string) => axiosInstance.get(`/auth/users-by-rol/${rol}`);