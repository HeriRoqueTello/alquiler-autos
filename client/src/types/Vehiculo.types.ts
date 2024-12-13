import { z } from 'zod';

export enum EstadosEnum {
  disponible = "disponible",
  reservado = "reservado",
  mantenimiento = "mantenimiento",
}

export const CreateVehiculoZod = z.object({
  marca: z.string(),
  modelo: z.string(),
  imagen: z.string(),
  estado: z.enum(["disponible", "reservado", "mantenimiento"]),
});

export interface Tarifas {
  tarifaBase: number;
  ageModel: number;
}

export type CreateVehiculoDto = z.infer<typeof CreateVehiculoZod>;

export interface Vehiculo {
  _id?: string;
  marca: string;
  modelo: string;
  imagen: string;
  estado: EstadosEnum;
}

export interface VehiculoWithTarifas extends Vehiculo {
  tarifas: Tarifas;
}

