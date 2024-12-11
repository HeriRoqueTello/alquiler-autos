import { z } from 'zod';

export enum RolEnum {
  admin = "admin",
  cliente = "cliente",
}



export const CreateUsuarioZod = z.object({
  nombre: z.string(),
  email: z.string(),
  telefono: z.string(),
  password: z.string(),
  rol: z.enum(["admin", "cliente"]),
});

export type CreateUsuarioDto = z.infer<typeof CreateUsuarioZod>;


export interface Usuario {
  _id?: string;
  nombre: string;
  email: string;
  telefono: string;
  password: string;
  rol: RolEnum;
}

