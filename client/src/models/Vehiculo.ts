import { Schema, model, models } from "mongoose";

const vehiculoSchema = new Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  estado: { type: String, required: true },
  tarifas: [{
    tipoVehiculo: { type: String, required: true },
    tarifaBase: { type: Number, required: true }
  }]
});

export default models.Vehiculo || model("Vehiculo", vehiculoSchema);
