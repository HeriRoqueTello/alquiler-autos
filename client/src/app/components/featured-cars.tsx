"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Calendar,
  Fuel,
  FastForwardIcon as Speed,
  Timer,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { id: "all", label: "Todos" },
  { id: "sedan", label: "Sedanes" },
  { id: "suv", label: "SUVs" },
  { id: "sport", label: "Deportivos" },
  { id: "luxury", label: "Lujo" },
];

const cars = [
  {
    id: 1,
    name: "BMW 3 Series Sedan",
    category: "sedan",
    price: 45000,
    pricePerDay: 150,
    image:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specs: {
      year: "2024",
      fuel: "Híbrido",
      power: "255 HP",
      acceleration: "5.6s",
      passengers: "5",
    },
    features: ["Luxury", "Comfort", "Efficient"],
    available: true,
  },
  {
    id: 2,
    name: "Chevrolet Camaro SS",
    category: "sport",
    price: 55000,
    pricePerDay: 200,
    image:
      "https://i.ytimg.com/vi/FGthlMeeKEs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBM4FswTg-J8C7v6cNzXhNbtFVggg",
    specs: {
      year: "2024",
      fuel: "Gasolina",
      power: "455 HP",
      acceleration: "4.0s",
      passengers: "4",
    },
    features: ["Sport", "Performance", "Classic"],
    available: true,
  },
  {
    id: 3,
    name: "Range Rover Evoque",
    category: "suv",
    price: 70000,
    pricePerDay: 250,
    image:
      "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/n20onzdjgzcnueh01av5.jpg",
    specs: {
      year: "2024",
      fuel: "Híbrido",
      power: "300 HP",
      acceleration: "6.5s",
      passengers: "5",
    },
    features: ["Luxury", "SUV", "All-Terrain"],
    available: true,
  },
  {
    id: 4,
    name: "Mercedes-Benz GLE",
    category: "luxury",
    price: 80000,
    pricePerDay: 300,
    image:
      "https://www.mercedes-benz.com.pe/documents/13378736/13381606/auto-gle-coupe-amg-03.jpg/934f146c-787b-c4dc-7b74-f68c8780e691?t=1709561719138",
    specs: {
      year: "2024",
      fuel: "Híbrido",
      power: "362 HP",
      acceleration: "5.5s",
      passengers: "7",
    },
    features: ["Premium", "Comfort", "Technology"],
    available: false,
  },
];

const MotionCard = motion(Card);

export function FeaturedCars() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCars =
    selectedCategory === "all"
      ? cars
      : cars.filter((car) => car.category === selectedCategory);

  return (
    <section className="py-16 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Autos Destacados
          </h2>
          <p className="text-muted-foreground">
            Explora nuestra selección premium de vehículos
          </p>

          <Tabs defaultValue="all" className="w-full justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="w-full"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <MotionCard
              key={car.id}
              className="overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {car.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-black/50 text-white"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                {!car.available && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Badge variant="destructive" className="text-lg">
                      No Disponible
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">
                      ${car.pricePerDay}
                    </p>
                    <p className="text-sm text-muted-foreground">por día</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{car.specs.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{car.specs.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Speed className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{car.specs.power}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                      {car.specs.passengers} personas
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full" disabled={!car.available}>
                  {car.available ? "Reservar Ahora" : "No Disponible"}
                </Button>
              </CardFooter>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
