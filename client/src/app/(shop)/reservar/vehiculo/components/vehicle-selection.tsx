"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Users,
  Fuel,
  Gauge,
  ShieldCheck,
  Car,
  Truck,
  Crown,
} from "lucide-react";
import Image from "next/image";

const categories = [
  {
    id: "economicos",
    label: "Económicos",
    icon: Car,
  },
  {
    id: "suvs",
    label: "SUVs",
    icon: Truck,
  },
  {
    id: "lujo",
    label: "De Lujo",
    icon: Crown,
  },
];

const vehicles = {
  economicos: [
    {
      id: 1,
      name: "Toyota Yaris",
      image: "/placeholder.svg?height=300&width=400",
      price: "120",
      specs: {
        passengers: "5",
        transmission: "Manual",
        fuel: "Gasolina",
        consumption: "18 km/l",
      },
      features: ["Bluetooth", "USB", "A/C"],
      available: true,
    },
  ],
  suvs: [
    {
      id: 1,
      name: "Honda CR-V",
      image: "/placeholder.svg?height=300&width=400",
      price: "200",
      specs: {
        passengers: "7",
        transmission: "Automático",
        fuel: "Gasolina",
        consumption: "14 km/l",
      },
      features: ["4x4", "Cámara", "GPS"],
      available: true,
    },
  ],
  lujo: [
    {
      id: 1,
      name: "Mercedes-Benz Clase C",
      image: "/placeholder.svg?height=300&width=400",
      price: "350",
      specs: {
        passengers: "5",
        transmission: "Automático",
        fuel: "Gasolina",
        consumption: "12 km/l",
      },
      features: ["Cuero", "Sunroof", "Premium"],
      available: true,
    },
  ],
};

export function VehicleSelection() {
  const router = useRouter();
  const [category, setCategory] = useState("economicos");
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);

  const handleContinue = () => {
    if (selectedVehicle) {
      router.push("/reservar/extras");
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Selection */}
      <Card className="p-6">
        <Tabs
          defaultValue="economicos"
          value={category}
          onValueChange={setCategory}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 gap-4">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div className="flex items-center gap-2">
                  <cat.icon className="h-4 w-4" />
                  <span>{cat.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Card>

      {/* Vehicle Selection */}
      <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
        <div className="flex w-max space-x-4 p-4">
          <AnimatePresence mode="wait">
            {vehicles[category].map((vehicle) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-[300px] shrink-0"
              >
                <Card
                  className={`group h-full cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    selectedVehicle === vehicle.id
                      ? "ring-2 ring-primary"
                      : "ring-1 ring-transparent"
                  }`}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                >
                  <div className="relative">
                    <Image
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      width={1000}
                      height={1000}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {!vehicle.available && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                        <Badge variant="destructive" className="text-lg">
                          No Disponible
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {vehicle.specs.passengers} personas
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Gauge className="h-4 w-4" />
                        {vehicle.specs.transmission}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Fuel className="h-4 w-4" />
                        {vehicle.specs.fuel}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="h-4 w-4" />
                        Asegurado
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className="bg-muted/50"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary">
                          S/ {vehicle.price}
                        </p>
                        <p className="text-sm text-muted-foreground">por día</p>
                      </div>
                      {selectedVehicle === vehicle.id && (
                        <Badge variant="default">Seleccionado</Badge>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Summary and Actions */}
      <Card className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Vehículo seleccionado
            </p>
            <p className="text-lg font-medium">
              {selectedVehicle
                ? vehicles[category].find((v) => v.id === selectedVehicle)?.name
                : "Ningún vehículo seleccionado"}
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => router.back()}>
              Atrás
            </Button>
            <Button onClick={handleContinue} disabled={!selectedVehicle}>
              Continuar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
