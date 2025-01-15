"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const transmissions = [
  { id: "automatic", label: "Automático" },
  { id: "manual", label: "Manual" },
];

const features = [
  { id: "bluetooth", label: "Bluetooth" },
  { id: "camera", label: "Cámara de Retroceso" },
  { id: "gps", label: "GPS" },
  { id: "sunroof", label: "Techo Solar" },
  { id: "usb", label: "Puertos USB" },
  { id: "seats", label: "Asientos de Cuero" },
];

const brands = [
  { id: "toyota", label: "Toyota" },
  { id: "honda", label: "Honda" },
  { id: "nissan", label: "Nissan" },
  { id: "hyundai", label: "Hyundai" },
  { id: "kia", label: "Kia" },
  { id: "mazda", label: "Mazda" },
];

export function VehicleFilters() {
  const [priceRange, setPriceRange] = useState([50, 500]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilters, setActiveFilters] = useState(0);

  return (
    <Card className="sticky top-4 border-none shadow-md bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>Filtros</CardTitle>
          {activeFilters > 0 && (
            <Badge variant="secondary" className="font-normal">
              {activeFilters} activos
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="price" className="border-b-0">
            <AccordionTrigger className="hover:no-underline py-2">
              <span className="text-sm font-medium">Precio por día</span>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 pt-2"
              >
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={50}
                  max={500}
                  step={10}
                  className="py-4"
                />
                <div className="flex items-center justify-between">
                  <div className="rounded-md border px-2 py-1">
                    <span className="text-sm font-medium">
                      S/ {priceRange[0]}
                    </span>
                  </div>
                  <div className="rounded-md border px-2 py-1">
                    <span className="text-sm font-medium">
                      S/ {priceRange[1]}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="transmission" className="border-b-0">
            <AccordionTrigger className="hover:no-underline py-2">
              <span className="text-sm font-medium">Transmisión</span>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 pt-2"
              >
                {transmissions.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox id={item.id} />
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="features" className="border-b-0">
            <AccordionTrigger className="hover:no-underline py-2">
              <span className="text-sm font-medium">Características</span>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 pt-2"
              >
                {features.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox id={item.id} />
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brands" className="border-b-0">
            <AccordionTrigger className="hover:no-underline py-2">
              <span className="text-sm font-medium">Marcas</span>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 pt-2"
              >
                {brands.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox id={item.id} />
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex flex-col gap-2 pt-2">
          <Button variant="outline" className="w-full hover:bg-muted">
            Limpiar Filtros
          </Button>
          <Button className="w-full">Aplicar Filtros</Button>
        </div>
      </CardContent>
    </Card>
  );
}
