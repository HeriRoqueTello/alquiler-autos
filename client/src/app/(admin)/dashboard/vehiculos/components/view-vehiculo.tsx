import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Vehiculo } from "@/types/Vehiculo.types";
import Image from "next/image";

interface SheetViewVehiculoProps {
  vehiculo: Vehiculo | null;
  onOpenChange: (value: boolean) => void;
  isOpen: boolean;
}

export function SheetViewVehiculo({
  vehiculo,
  isOpen,
  onOpenChange,
}: SheetViewVehiculoProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{vehiculo ? vehiculo.marca : "No select"}</SheetTitle>
          <SheetDescription>
            Modelo {(vehiculo && vehiculo.modelo) || ""} - Estado{" "}
            {(vehiculo && vehiculo.estado) || ""}
            <Image
              src={
                vehiculo ? vehiculo.imagen : "https://via.placeholder.com/200"
              }
              alt={vehiculo ? vehiculo.marca : "No select"}
              width={200}
              height={200}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
