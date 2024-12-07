import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
    nombre: string;
    email: string;
    password: string;
    rol: string;
}

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    rol: { type: String, enum: ['cliente', 'empleado'], required: true }

})

const User = mongoose.model<IUser>('User', userSchema)
export default User