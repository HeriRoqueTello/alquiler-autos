"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./(styles)/vehiculos.css";

enum EstadosEnum {
  disponible = "disponible",
  alquilado = "alquilado",
  mantenimiento = "mantenimiento",
}

type Inputs = {
  id?: number;
  marca: string;
  modelo: string;
  estado: EstadosEnum;
};

interface Vehiculo {
  _id?: number;
  marca: string;
  modelo: string;
  estado: EstadosEnum;
}

const url = "https://alquiler-autos-iwwh.onrender.com/api/vehiculos";
// const url = "http://localhost:3000/api/vehiculos";
// const url = `https://alquiler-autos-beta.vercel.app/api/vehiculos`;

export default function Vehiculos() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (modo === "editar") {
      updateVehiculo(data.id!, {
        marca: data.marca,
        modelo: data.modelo,
        estado: data.estado as EstadosEnum,
      });
      return;
    }

    addVehiculo({
      marca: data.marca,
      modelo: data.modelo,
      estado: data.estado as EstadosEnum,
    });
  };

  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [modo, setModo] = useState("crear");

  useEffect(() => {
    async function getVehiculos() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!Array.isArray(data)) {
          console.log("Error bd no datos");
          return;
        }
        setVehiculos(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getVehiculos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addVehiculo = async (vehiculo: Vehiculo) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehiculo),
    });

    const { _id } = await response.json();

    vehiculo = { ...vehiculo, _id };

    setVehiculos([...vehiculos, vehiculo]);
  };

  const deleteVehiculo = async (id: number) => {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    setVehiculos(vehiculos.filter((v) => v._id !== id));
  };

  const modoEditar = (id: number, vehiculo: Vehiculo) => {
    setModo("editar");
    setValue("id", id);
    setValue("marca", vehiculo.marca);
    setValue("modelo", vehiculo.modelo);
    setValue("estado", vehiculo.estado);
  };

  const updateVehiculo = async (id: number, vehiculo: Vehiculo) => {
    await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehiculo),
    });

    setValue("id", undefined);
    setValue("marca", "");
    setValue("modelo", "");
    setValue("estado", EstadosEnum.disponible);
    setModo("crear");

    setVehiculos(
      vehiculos.map((v) => {
        if (v._id === id) {
          vehiculo._id = id;
          return vehiculo;
        }
        return v;
      })
    );
    console.log(vehiculo);
  };

  return (
    <div className="">
      <h1>Gestión de Vehículos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} hidden />
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

        <button type="submit">
          {modo === "crear" ? "Añadir" : "Editar"} Vehículo
        </button>
      </form>

      <table id="vehicle-table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos?.map((vehiculo) => (
            <tr key={vehiculo._id}>
              <td>{vehiculo.marca}</td>
              <td>{vehiculo.modelo}</td>
              <td className="uppercase">{vehiculo.estado}</td>
              <td>
                <button
                  className="mr-2"
                  onClick={() => deleteVehiculo(vehiculo._id!)}
                >
                  Eliminar
                </button>
                <button onClick={() => modoEditar(vehiculo._id!, vehiculo)}>
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
