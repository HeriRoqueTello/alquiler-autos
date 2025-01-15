"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VehicleFilters } from "./vehicle-filters";
import { VehicleGrid } from "./vehicle-grid";
import { VehicleSort } from "./vehicle-sort";
import { Car, Truck, Crown } from "lucide-react";

const categories = [
  {
    id: "economicos",
    label: "Económicos",
    description: "Autos compactos y eficientes perfectos para la ciudad",
    icon: Car,
  },
  {
    id: "suvs",
    label: "SUVs",
    description: "Vehículos espaciosos ideales para viajes familiares",
    icon: Truck,
  },
  {
    id: "lujo",
    label: "De Lujo",
    description: "Experimenta el máximo confort con nuestra flota premium",
    icon: Crown,
  },
];

export function VehicleCatalog() {
  const [activeCategory, setActiveCategory] = useState("economicos");

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="rounded-2xl bg-card shadow-lg border p-6 md:p-8">
        {/* Category Tabs */}
        <div className="mb-10 space-y-6">
          <Tabs
            defaultValue="economicos"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 gap-4 bg-muted/50 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-background"
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center space-y-2"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              {categories.find((c) => c.id === activeCategory)?.label}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {categories.find((c) => c.id === activeCategory)?.description}
            </p>
          </motion.div>
        </div>

        {/* Filters and Grid */}
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="w-full lg:w-72 shrink-0">
            <VehicleFilters />
          </aside>

          <main className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground">
                  24 vehículos encontrados
                </p>
              </div>
              <VehicleSort />
            </div>
            <VehicleGrid category={activeCategory} />
          </main>
        </div>
      </div>
    </div>
  );
}
