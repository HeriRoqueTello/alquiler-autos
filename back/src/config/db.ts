import mongoose from "mongoose";
import colors from 'colors';

export const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI
    const { connection } = await mongoose.connect(url);
    console.log(colors.cyan.bold(`MongoDB Conectado: ${connection.host}:${connection.port}`));

  }
  catch (error) {

    console.log(error.message);
    process.exit(1);
  }
}