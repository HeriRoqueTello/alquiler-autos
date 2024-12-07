import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  nombre: string;
  email: string;
  password: string;
  telefono?: string;
  rol: 'usuario' | 'empleado';
  compararPassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: { type: String },
  rol: { type: String, enum: ['usuario', 'empleado'], required: true }
});

// Middleware para encriptar la contraseña antes de guardarla
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

// Método para comparar la contraseña ingresada con la encriptada
userSchema.methods.compararPassword = function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = model<IUser>('User', userSchema);
