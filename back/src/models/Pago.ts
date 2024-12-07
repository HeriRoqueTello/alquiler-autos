import { Schema, model, Document } from 'mongoose';

export interface IPayment extends Document {
  reserva_id: Schema.Types.ObjectId;
  monto: number;
  fecha: Date;
}

const paymentSchema = new Schema<IPayment>({
  reserva_id: { type: Schema.Types.ObjectId, ref: 'Reservation', required: true },
  monto: { type: Number, required: true },
  fecha: { type: Date, required: true }
});

export const Payment = model<IPayment>('Payment', paymentSchema);
