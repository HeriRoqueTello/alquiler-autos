export enum RolEnum {
  admin = "admin",
  cliente = "cliente",
}

export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  password: string;
  rol: RolEnum;
}