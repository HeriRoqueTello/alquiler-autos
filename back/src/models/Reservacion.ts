import { Schema, model, Document } from 'mongoose';

export interface IReservation extends Document {
  usuario_id: Schema.Types.ObjectId;
  vehiculo_id: Schema.Types.ObjectId;
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
}

const reservationSchema = new Schema<IReservation>({
  usuario_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  vehiculo_id: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  estado: { type: String, required: true }
});

export const Reservation = model<IReservation>('Reservation', reservationSchema);
