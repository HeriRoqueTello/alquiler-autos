"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { getAllVehiculos } from "@/services/vehiculo.service";
import { VehiculoWithTarifas } from "@/types/Vehiculo.types";

export default function VehiculosCards() {
  const [vehiculos, setVehiculos] = useState<VehiculoWithTarifas[]>([]);

  useEffect(() => {
    async function loadVehiculos() {
      const vehiculos = await getAllVehiculos();
      setVehiculos(vehiculos);
    }

    loadVehiculos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehiculos.map((vehicle) => (
        <Card key={vehicle._id} className="overflow-hidden">
          <div className="relative h-[200px]">
            <Image
              src={vehicle.imagen}
              alt={vehicle.modelo}
              fill
              className="object-contain"
            />
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-xl">{vehicle.modelo}</h3>
                <Badge variant="secondary">Económico</Badge>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline">{vehicle.marca}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <span>🚘 {vehicle.tarifas.ageModel} año</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <span>🔄 {vehicle.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>❄️ {vehicle.airConditioner ? "A/C" : "Sin A/C"}</span>
                </div> */}
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t flex justify-between items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">
                S/{vehicle.tarifas.tarifaBase}
              </span>
              <span className="text-gray-500 dark:text-gray-400">/día</span>
            </div>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              Reservar
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
