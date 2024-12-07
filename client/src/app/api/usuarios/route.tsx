import Vehiculo from "@/models/Vehiculo";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const vehiculos = await Vehiculo.find();
  return NextResponse.json(vehiculos);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newVehiculo = new Vehiculo(body);
    const savedVehiculo = await newVehiculo.save();
    return NextResponse.json(savedVehiculo);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
