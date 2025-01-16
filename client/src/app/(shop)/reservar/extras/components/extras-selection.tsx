"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Navigation,
  Wifi,
  Baby,
  ParkingSquare,
  Clock,
  UserPlus,
  MapPin,
} from "lucide-react";

interface Extra {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ElementType;
  popular?: boolean;
  recommended?: boolean;
}

const protectionExtras: Extra[] = [
  {
    id: "full-insurance",
    name: "Seguro Full Coverage",
    description: "Cobertura total contra daños y robo, con deducible cero",
    price: 25,
    icon: Shield,
    recommended: true,
  },
  {
    id: "basic-insurance",
    name: "Seguro Básico",
    description: "Cobertura básica contra daños a terceros",
    price: 15,
    icon: Shield,
  },
];

const equipmentExtras: Extra[] = [
  {
    id: "gps",
    name: "GPS Navegador",
    description: "Sistema de navegación actualizado con mapas offline",
    price: 10,
    icon: Navigation,
    popular: true,
  },
  {
    id: "wifi",
    name: "WiFi Portátil",
    description: "Internet 4G ilimitado durante tu viaje",
    price: 12,
    icon: Wifi,
    popular: true,
  },
  {
    id: "baby-seat",
    name: "Asiento para Bebé",
    description: "Asiento infantil homologado y seguro",
    price: 8,
    icon: Baby,
  },
];

const serviceExtras: Extra[] = [
  {
    id: "parking",
    name: "Estacionamiento Aeropuerto",
    description: "Estacionamiento seguro durante tu viaje",
    price: 15,
    icon: ParkingSquare,
  },
  {
    id: "early-pickup",
    name: "Recogida Temprana",
    description: "Recoge tu vehículo antes de la hora estándar",
    price: 20,
    icon: Clock,
  },
  {
    id: "additional-driver",
    name: "Conductor Adicional",
    description: "Agrega un conductor extra a tu reserva",
    price: 10,
    icon: UserPlus,
  },
  {
    id: "different-location",
    name: "Devolución en Otra Ubicación",
    description: "Devuelve el vehículo en una ubicación diferente",
    price: 30,
    icon: MapPin,
  },
];

export function ExtrasSelection() {
  const router = useRouter();
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const handleToggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const calculateTotal = () => {
    const allExtras = [
      ...protectionExtras,
      ...equipmentExtras,
      ...serviceExtras,
    ];
    return selectedExtras.reduce((total, extraId) => {
      const extra = allExtras.find((e) => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);
  };

  const ExtraCard = ({ extra }: { extra: Extra }) => {
    const isSelected = selectedExtras.includes(extra.id);

    return (
      <Card
        className={`relative h-full overflow-hidden transition-all duration-300 ${
          isSelected ? "ring-2 ring-primary" : ""
        }`}
      >
        {(extra.popular || extra.recommended) && (
          <div className="absolute right-0 top-0">
            <Badge
              variant={extra.recommended ? "default" : "secondary"}
              className="rounded-none rounded-bl"
            >
              {extra.recommended ? "Recomendado" : "Popular"}
            </Badge>
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <extra.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{extra.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {extra.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">
                  S/ {extra.price}
                  <span className="text-sm text-muted-foreground"> /día</span>
                </p>
                <Switch
                  checked={isSelected}
                  onCheckedChange={() => handleToggleExtra(extra.id)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Protection Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Protección del Vehículo
        </h2>
        <motion.div
          layout
          transition={{ layout: { duration: 0.3 }, opacity: { duration: 0.2 } }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {protectionExtras.map((extra) => (
              <motion.div
                key={extra.id}
                layout
                transition={{
                  layout: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
              >
                <ExtraCard extra={extra} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Equipment Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Equipamiento Adicional
        </h2>
        <motion.div
          layout
          transition={{ layout: { duration: 0.3 }, opacity: { duration: 0.2 } }}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {equipmentExtras.map((extra) => (
              <motion.div
                key={extra.id}
                layout
                transition={{
                  layout: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
              >
                <ExtraCard key={extra.id} extra={extra} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Servicios Adicionales
        </h2>
        <motion.div
          layout
          transition={{ layout: { duration: 0.3 }, opacity: { duration: 0.2 } }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {serviceExtras.map((extra) => (
              <motion.div
                key={extra.id}
                layout
                transition={{
                  layout: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
              >
                <ExtraCard key={extra.id} extra={extra} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Summary and Actions */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Resumen de Extras Seleccionados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedExtras.length > 0 ? (
            <>
              {selectedExtras.map((extraId) => {
                const extra = [
                  ...protectionExtras,
                  ...equipmentExtras,
                  ...serviceExtras,
                ].find((e) => e.id === extraId);
                if (!extra) return null;
                return (
                  <div
                    key={extra.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <extra.icon className="h-4 w-4 text-muted-foreground" />
                      <span>{extra.name}</span>
                    </div>
                    <span>S/ {extra.price}/día</span>
                  </div>
                );
              })}
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>Total extras por día</span>
                <span>S/ {calculateTotal()}</span>
              </div>
            </>
          ) : (
            <p className="text-muted-foreground">
              No has seleccionado ningún extra todavía
            </p>
          )}
        </CardContent>
        <div className="p-6 pt-0 flex flex-col sm:flex-row sm:justify-end gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Atrás
          </Button>
          <Button onClick={() => router.push("/reservar/pago")}>
            Continuar
          </Button>
        </div>
      </Card>
    </div>
  );
}
