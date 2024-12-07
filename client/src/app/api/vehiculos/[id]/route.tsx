import Vehiculo from "@/models/Vehiculo";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  dbConnect();
  try {
    const vehiculoFound = await Vehiculo.findById(params.id);

    if (!vehiculoFound)
      return NextResponse.json(
        {
          message: "Vehiculo not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(vehiculoFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  const body = await request.json();
  dbConnect();

  try {
    const vehiculoUpdated = await Vehiculo.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!vehiculoUpdated)
      return NextResponse.json(
        {
          message: "Vehiculo not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(vehiculoUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  dbConnect();

  try {
    const vehiculoDeleted = await Vehiculo.findByIdAndDelete(params.id);

    if (!vehiculoDeleted)
      return NextResponse.json(
        {
          message: "Vehiculo not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(vehiculoDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
