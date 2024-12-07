export enum RolEnum {
  admin = "admin",
  cliente = "cliente",
}

export enum EstadosEnum {
  disponible = "disponible",
  alquilado = "alquilado",
  mantenimiento = "mantenimiento",
}

export interface Usuario {
  id?: string;
  nombre: string;
  email: string;
  telefono: string;
  password: string;
  rol: RolEnum;
}

export interface Vehiculo {
  _id?: string;
  marca: string;
  modelo: string;
  estado: EstadosEnum;
}