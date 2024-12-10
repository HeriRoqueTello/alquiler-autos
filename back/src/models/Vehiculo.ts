import { Schema, model, Document } from 'mongoose';

export interface ITarifa {
  tipoVehiculo: string;
  tarifaBase: number;
}

type Estado = 'disponible' | 'reservado' | 'mantenimiento';

export interface IVehicle extends Document {
  marca: string;
  modelo: string;
  estado: Estado;
  imagen: string;
  tarifas: ITarifa[];
}

const tarifaSchema = new Schema<ITarifa>({
  tipoVehiculo: { type: String, required: true },
  tarifaBase: { type: Number, required: true }
});

const vehicleSchema = new Schema<IVehicle>({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  estado: { type: String, required: true },
  imagen: { type: String, required: true },
  tarifas: [tarifaSchema]
});

export const Vehiculo = model<IVehicle>('Vehicle', vehicleSchema);
