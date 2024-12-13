"use client";

import { Button } from "@/components/ui/button";
import { Usuario } from "@/types/Usuario.types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import DataTableRowActions from "./row-actions";

interface UsuariosColumnsProps {
  onView: (usuario: Usuario) => void;
  onEdit: (usuario: Usuario) => void;
  onDelete: (usuario: Usuario) => void;
}

export const getUsuariosColumns = ({
  onView,
  onEdit,
  onDelete,
}: UsuariosColumnsProps): ColumnDef<Usuario>[] => [
  {
    accessorKey: "nombre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "telefono",
    header: "Telefono",
  },
  {
    accessorKey: "password",
    header: "Contraseña",
    cell: () => "*".repeat(5),
  },
  {
    accessorKey: "rol",
    header: "Rol",
  },
  {
    accessorKey: "Acciones",
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ),
  },
];
