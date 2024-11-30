"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

enum EstadosEnum {
  disponible = "disponible",
  alquilado = "alquilado",
  mantenimiento = "mantenimiento",
}

type Inputs = {
  marca: string;
  modelo: string;
  estado: string;
};

interface Vehiculo {
  id: number;
  marca: string;
  modelo: string;
  estado: EstadosEnum;
}

const url = "https://alquiler-autos-iwwh.onrender.com/api/vehiculos";
// const url = "http://localhost:3000/api/vehiculos";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  useEffect(() => {
    async function getVehiculos() {
      const response = await fetch(url);
      const data = await response.json();
      setVehiculos(data);
    }

    getVehiculos();

    console.log(vehiculos);
  }, []);

  const deleteVehiculo = async (id: number) => {
    await fetch(`${url}${id}`, {
      method: "DELETE",
    });
  };

  const updateVehiculo = async (id: number, vehiculo: Vehiculo) => {
    await fetch(`${url}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehiculo),
    });

    console.log(vehiculo);
  };

  return (
    <div className="">
      <h1>Gestión de Vehículos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="marca">Marca:</label>
        <input {...register("marca", { required: true })} />

        <label htmlFor="modelo">Modelo:</label>
        <input {...register("modelo", { required: true })} />

        <label htmlFor="estado">Estado:</label>
        <select {...register("estado")}>
          <option value="disponible">Disponible</option>
          <option value="alquilado">Alquilado</option>
          <option value="mantenimiento">Mantenimiento</option>
        </select>

        <button type="submit">Añadir Vehículo</button>
      </form>

      <table id="vehicle-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos?.map((vehiculo) => (
            <tr key={vehiculo.id}>
              <td>{vehiculo.id}</td>
              <td>{vehiculo.marca}</td>
              <td>{vehiculo.modelo}</td>
              <td>{vehiculo.estado}</td>
              <td>
                <button
                  className="mr-2"
                  onClick={() => deleteVehiculo(vehiculo.id)}
                >
                  Eliminar
                </button>
                <button onClick={() => updateVehiculo(vehiculo.id, vehiculo)}>
                  Actualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
