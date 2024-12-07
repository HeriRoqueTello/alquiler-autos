import { Schema, model, Document } from 'mongoose';

export interface IMaintenance extends Document {
  vehiculo_id: Schema.Types.ObjectId;
  fechaInicio: Date;
  fechaFin: Date;
  descripcion?: string;
}

const maintenanceSchema = new Schema<IMaintenance>({
  vehiculo_id: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  descripcion: { type: String }
});

export const Maintenance = model<IMaintenance>('Maintenance', maintenanceSchema);
