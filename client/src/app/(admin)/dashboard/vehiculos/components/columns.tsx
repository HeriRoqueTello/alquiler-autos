"use client";

import { Button } from "@/components/ui/button";
import { Vehiculo } from "@/types/Vehiculo.types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import DataTableRowActions from "./row-actions";

interface VehiculosColumnsProps {
  onEdit: (vehiculo: Vehiculo) => void;
  onDelete: (vehiculo: Vehiculo) => void;
}

export const getVehiculosColumns = ({
  onEdit,
  onDelete,
}: VehiculosColumnsProps): ColumnDef<Vehiculo>[] => [
  {
    accessorKey: "marca",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Marca
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "modelo",
    header: "Modelo",
  },
  {
    accessorKey: "imagen",
    header: "Imagen",
  },
  {
    accessorKey: "estado",
    header: "Estado",
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions row={row} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
