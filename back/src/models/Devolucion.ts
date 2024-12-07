import { Schema, model, Document } from 'mongoose';

export interface IReturn extends Document {
  reserva_id: Schema.Types.ObjectId;
  fechaDevolucion: Date;
  mora: number;
}

const returnSchema = new Schema<IReturn>({
  reserva_id: { type: Schema.Types.ObjectId, ref: 'Reservation', required: true },
  fechaDevolucion: { type: Date, required: true },
  mora: { type: Number, required: true }
});

export const Return = model<IReturn>('Return', returnSchema);
