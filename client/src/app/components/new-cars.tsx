"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Users, Fuel, Gauge } from "lucide-react";
import Image from "next/image";

const cars = [
  {
    id: 1,
    name: "Ferrari 488 Superfast",
    price: "1,200",
    image:
      "https://images.unsplash.com/photo-1524710800377-5cdd93fa491a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    specs: {
      seats: "2",
      fuel: "Gasolina",
      speed: "340 km/h",
    },
    tags: ["Superdeportivo", "Lujo", "Nuevo"],
  },
  {
    id: 2,
    name: "Lamborghini Huracán",
    price: "1,500",
    image:
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    specs: {
      seats: "2",
      fuel: "Gasolina",
      speed: "325 km/h",
    },
    tags: ["Superdeportivo", "Premium", "Nuevo"],
  },
  {
    id: 3,
    name: "Porsche 911 GT3",
    price: "1,100",
    image:
      "https://images.unsplash.com/photo-1713256606752-4af258739fb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    specs: {
      seats: "2",
      fuel: "Gasolina",
      speed: "318 km/h",
    },
    tags: ["Deportivo", "Exclusivo", "Nuevo"],
  },
];

export function NewestCars() {
  return (
    <section className="py-16 bg-muted/50 dark:bg-muted/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Descubre Nuestros Autos Nuevos
          </h2>
          <p className="text-muted-foreground">
            Explora nuestra exclusiva colección de superdeportivos
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {cars.map((car) => (
              <CarouselItem key={car.id} className="md:basis-1/2 lg:basis-1/1">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={1000}
                      height={1000}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {car.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-black/50 text-white"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold">{car.name}</h3>
                        <div className="flex items-center mt-1 text-muted-foreground">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="ml-1">{car.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Desde</p>
                        <p className="text-2xl font-bold text-primary">
                          S/{car.price}
                        </p>
                        <p className="text-sm text-muted-foreground">/día</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">
                          {car.specs.seats} asientos
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{car.specs.fuel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{car.specs.speed}</span>
                      </div>
                    </div>

                    <Button className="w-full">Reservar Ahora</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
