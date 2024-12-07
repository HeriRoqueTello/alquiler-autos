import { Schema, model, Document } from 'mongoose';

export interface IHistory extends Document {
  usuario_id: Schema.Types.ObjectId;
  fechaHora: Date;
  tipoAccion: string;
}

const historySchema = new Schema<IHistory>({
  usuario_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fechaHora: { type: Date, required: true },
  tipoAccion: { type: String, required: true }
});

export const History = model<IHistory>('History', historySchema);
