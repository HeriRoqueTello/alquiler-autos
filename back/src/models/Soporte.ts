import { Schema, model, Document } from 'mongoose';

export interface ISupport extends Document {
  usuario_id: Schema.Types.ObjectId;
  descripcionProblema: string;
}

const supportSchema = new Schema<ISupport>({
  usuario_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  descripcionProblema: { type: String, required: true }
});

export const Support = model<ISupport>('Support', supportSchema);
