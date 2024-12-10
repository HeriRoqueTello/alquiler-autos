/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EstadosEnum, Vehiculo } from "@/types/Vehiculo.types";
import { getAllVehiculos } from "@/services/vehiculo.service";
// import { DataTable } from "./components/data-table";
// import { columns } from "./components/columns";

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
      // modificarVehiculo(data.id!, {
      //   marca: data.marca,
      //   modelo: data.modelo,
      //   estado: data.estado as EstadosEnum,
      // });
      return;
    }

    // addVehiculo({
    //   marca: data.marca,
    //   modelo: data.modelo,
    //   estado: data.estado as EstadosEnum,
    // });
  };

  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [modo, setModo] = useState("crear");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getVehiculos() {
      try {
        const data = getAllVehiculos();
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

  // const addVehiculo = async (vehiculo: Vehiculo) => {
  //   const data = createVehiculo(vehiculo);

  //   const { _id } = data;

  //   vehiculo = { ...vehiculo, _id };

  //   setVehiculos([...vehiculos, vehiculo]);
  // };

  // const eliminarVehiculo = async (id: string) => {
  //   await deleteVehiculo(id);

  //   setVehiculos(vehiculos.filter((v) => v._id !== id));
  // };

  // const modoEditar = (id: string, vehiculo: Vehiculo) => {
  //   setModo("editar");
  //   setValue("id", id);
  //   setValue("marca", vehiculo.marca);
  //   setValue("modelo", vehiculo.modelo);
  //   setValue("estado", vehiculo.estado);
  // };

  // const modificarVehiculo = async (id: string, vehiculo: Vehiculo) => {
  //   await updateVehiculo(id, vehiculo);

  //   setValue("id", undefined);
  //   setValue("marca", "");
  //   setValue("modelo", "");
  //   setValue("estado", EstadosEnum.disponible);
  //   setModo("crear");

  //   setVehiculos(
  //     vehiculos.map((v) => {
  //       if (v._id === id) {
  //         vehiculo._id = id;
  //         return vehiculo;
  //       }
  //       return v;
  //     })
  //   );
  //   console.log(vehiculo);
  // };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center">Gestión de Vehículos</h1>
      <form
        className="flex flex-col gap-4 my-4 w-full md:w-2/3 mx-auto lg:w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-gray-400 border w-full py-2 rounded px-5"
          {...register("id")}
          hidden
        />
        <label htmlFor="marca">Marca:</label>
        <input
          id="marca"
          className="border-gray-400 border w-full py-2 rounded px-5 text-gray-700"
          {...register("marca", { required: true })}
        />

        <label htmlFor="modelo">Modelo:</label>
        <input
          id="modelo"
          className="border-gray-400 border w-full py-2 rounded px-5 text-gray-700"
          {...register("modelo", { required: true })}
        />

        <label htmlFor="estado">Estado:</label>
        <select
          id="estado"
          className="mt-1.5 w-full rounded border-gray-400 border py-2 px-4 text-gray-700"
          {...register("estado")}
        >
          <option value="disponible">Disponible</option>
          <option value="alquilado">Alquilado</option>
          <option value="mantenimiento">Mantenimiento</option>
        </select>

        <button
          className="py-2 px-5 rounded bg-indigo-500 hover:bg-indigo-800 text-white delay-75 transition-all"
          type="submit"
        >
          {modo === "crear" ? "Añadir" : "Editar"} Vehículo
        </button>
      </form>

      {loading ? (
        <span>Cargando...</span>
      ) : (
        // <Table
        //   vehiculos={vehiculos}
        //   eliminarVehiculo={eliminarVehiculo}
        //   modoEditar={modoEditar}
        // />
        // <DataTable columns={columns} data={vehiculos} />
        <p>Hola</p>
      )}
    </div>
  );
}
