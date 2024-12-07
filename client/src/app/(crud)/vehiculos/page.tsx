"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./(styles)/vehiculos.css";
import { EstadosEnum, Vehiculo } from "../../utils/types";
import {
  createVehiculo,
  deleteVehiculo,
  getAllVehiculos,
  updateVehiculo,
} from "../../utils/api/vehiculo.api";
import { Table } from "./components/Table";

type Inputs = {
  id?: string;
  marca: string;
  modelo: string;
  estado: EstadosEnum;
};

export default function Vehiculos() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (modo === "editar") {
      modificarVehiculo(data.id!, {
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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getVehiculos() {
      try {
        const { data } = await getAllVehiculos();
        if (!Array.isArray(data)) {
          console.log("Error bd no datos");
          setLoading(false);
          return;
        }
        setVehiculos(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setVehiculos([]);
        console.error(error);
      }
    }

    getVehiculos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addVehiculo = async (vehiculo: Vehiculo) => {
    const { data } = await createVehiculo(vehiculo);

    const { _id } = data;

    vehiculo = { ...vehiculo, _id };

    setVehiculos([...vehiculos, vehiculo]);
  };

  const eliminarVehiculo = async (id: string) => {
    await deleteVehiculo(id);

    setVehiculos(vehiculos.filter((v) => v._id !== id));
  };

  const modoEditar = (id: string, vehiculo: Vehiculo) => {
    setModo("editar");
    setValue("id", id);
    setValue("marca", vehiculo.marca);
    setValue("modelo", vehiculo.modelo);
    setValue("estado", vehiculo.estado);
  };

  const modificarVehiculo = async (id: string, vehiculo: Vehiculo) => {
    await updateVehiculo(id, vehiculo);

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

      {loading ? (
        <span>Cargando...</span>
      ) : (
        <Table
          vehiculos={vehiculos}
          eliminarVehiculo={eliminarVehiculo}
          modoEditar={modoEditar}
        />
      )}
    </div>
  );
}
