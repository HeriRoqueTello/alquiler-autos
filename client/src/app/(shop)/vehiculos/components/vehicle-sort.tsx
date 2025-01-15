"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortAsc } from "lucide-react";

export function VehicleSort() {
  return (
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <Select defaultValue="price-asc">
        <SelectTrigger className="w-[200px] bg-card/50 backdrop-blur-sm">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
          <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
          <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
          <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
          <SelectItem value="rating-desc">Mejor Valorados</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
