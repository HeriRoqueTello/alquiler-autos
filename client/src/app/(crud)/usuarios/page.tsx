"use client";
import { useEffect, useState } from "react";
import { Usuario } from "@/app/utils/types";
import { Table } from "./components/Table";
import { getAllUsuarios } from "@/app/utils/api/usuario.api";

export default function Page() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getUsuarios() {
      try {
        const { data } = await getAllUsuarios();
        if (!Array.isArray(data)) {
          console.log("Error bd no datos");
          setLoading(false);
          return;
        }
        setUsuarios(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setUsuarios([]);
        console.error(error);
      }
    }

    getUsuarios();
  }, []);

  return (
    <div>
      Usuarios List
      {loading ? <span>Cargando...</span> : <Table usuarios={usuarios} />}
    </div>
  );
}
