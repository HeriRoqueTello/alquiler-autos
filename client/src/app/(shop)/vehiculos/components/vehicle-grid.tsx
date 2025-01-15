"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Fuel, Gauge, Heart, ShieldCheck, Star, Users } from "lucide-react";

const vehicles = {
  economicos: [
    {
      id: 1,
      name: "Toyota Yaris",
      image:
        "https://i.ytimg.com/vi/FGthlMeeKEs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBM4FswTg-J8C7v6cNzXhNbtFVggg",
      price: "120",
      rating: 4.5,
      specs: {
        passengers: "5",
        transmission: "Manual",
        fuel: "Gasolina",
        consumption: "18 km/l",
      },
      features: ["Bluetooth", "USB", "A/C"],
      available: true,
    },
    // Más vehículos económicos...
  ],
  suvs: [
    {
      id: 1,
      name: "Honda CR-V",
      image:
        "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/n20onzdjgzcnueh01av5.jpg",
      price: "200",
      rating: 4.8,
      specs: {
        passengers: "7",
        transmission: "Automático",
        fuel: "Gasolina",
        consumption: "14 km/l",
      },
      features: ["4x4", "Cámara", "GPS"],
      available: true,
    },
    // Más SUVs...
  ],
  lujo: [
    {
      id: 1,
      name: "Mercedes-Benz Clase C",
      image:
        "https://www.mercedes-benz.com.pe/documents/13378736/13381606/auto-gle-coupe-amg-03.jpg/934f146c-787b-c4dc-7b74-f68c8780e691?t=1709561719138",
      price: "350",
      rating: 4.9,
      specs: {
        passengers: "5",
        transmission: "Automático",
        fuel: "Gasolina",
        consumption: "12 km/l",
      },
      features: ["Cuero", "Sunroof", "Premium"],
      available: true,
    },
    // Más vehículos de lujo...
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface VehicleGridProps {
  category: string;
}

export function VehicleGrid({ category }: VehicleGridProps) {
  const categoryVehicles = vehicles[category] || [];

  // const [vehiculos, setVehiculos] = useState<VehiculoWithTarifas[]>([]);

  // useEffect(() => {
  //   async function loadVehiculos() {
  //     const vehiculos = await getAllVehiculos();
  //     setVehiculos(vehiculos);
  //   }

  //   loadVehiculos();
  // }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {categoryVehicles.map((vehicle) => (
          <motion.div key={vehicle.id} variants={item} layout>
            <Card className="group h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-3 top-3 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                {!vehicle.available && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <Badge variant="destructive" className="text-lg">
                      No Disponible
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                  <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {vehicle.rating}
                    </span>
                  </div>
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
                      className="bg-muted/50 hover:bg-muted/70 transition-colors"
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
                  <Button
                    disabled={!vehicle.available}
                    className="shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {vehicle.available ? "Reservar" : "No Disponible"}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
