"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet } from "@mercadopago/sdk-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Car, Calendar, Shield, Package } from "lucide-react";
import Image from "next/image";

// Datos de ejemplo - En producción vendrían de un contexto o estado global
const reservationData = {
  vehicle: {
    name: "Mercedes-Benz Clase C",
    price: 350,
    image: "/placeholder.svg?height=100&width=200",
  },
  dates: {
    start: new Date("2024-02-01"),
    end: new Date("2024-02-05"),
    days: 5,
  },
  extras: [
    { id: "full-insurance", name: "Seguro Full Coverage", price: 25 },
    { id: "gps", name: "GPS Navegador", price: 10 },
    { id: "wifi", name: "WiFi Portátil", price: 12 },
  ],
};

export function PaymentSummary() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [preferenceId, setPreferenceId] = useState<string>("");
  const showError = searchParams.get("error") === "true";

  const calculateTotal = () => {
    const vehicleTotal =
      reservationData.vehicle.price * reservationData.dates.days;
    const extrasTotal = reservationData.extras.reduce(
      (sum, extra) => sum + extra.price * reservationData.dates.days,
      0
    );
    return vehicleTotal + extrasTotal;
  };

  const handleCreatePreference = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/create-preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: "vehicle-rental",
              title: `Alquiler de ${reservationData.vehicle.name}`,
              quantity: 1,
              currency_id: "PEN",
              unit_price: calculateTotal(),
            },
          ],
          payer: {
            name: "John",
            surname: "Doe",
            email: "john@doe.com",
          },
        }),
      });

      const data = await response.json();

      if (data.id) {
        setPreferenceId(data.id);
      } else {
        throw new Error("No se pudo crear la preferencia de pago");
      }
    } catch (error) {
      console.error("Error:", error);
      router.push("/reservar/pago?error=true");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Hubo un problema al procesar el pago. Por favor, intenta
                nuevamente.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <Card>
        <CardHeader>
          <CardTitle>Resumen de la Reserva</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Detalles del Vehículo */}
          <div className="flex gap-4">
            <Image
              src={reservationData.vehicle.image || "/placeholder.svg"}
              alt={reservationData.vehicle.name}
              className="h-24 w-40 rounded-lg object-cover"
              width={1000}
              height={1000}
            />
            <div>
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">{reservationData.vehicle.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                S/ {reservationData.vehicle.price} por día
              </p>
            </div>
          </div>

          <Separator />

          {/* Detalles de las Fechas */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Fechas de Alquiler</span>
            </div>
            <div className="grid gap-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duración</span>
                <span>{reservationData.dates.days} días</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal Vehículo</span>
                <span>
                  S/{" "}
                  {reservationData.vehicle.price * reservationData.dates.days}
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Extras Seleccionados */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Extras Seleccionados</span>
            </div>
            <div className="grid gap-1 text-sm">
              {reservationData.extras.map((extra) => (
                <div key={extra.id} className="flex justify-between">
                  <span className="text-muted-foreground">{extra.name}</span>
                  <span>S/ {extra.price * reservationData.dates.days}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Total */}
          <div className="flex justify-between font-medium">
            <span>Total a Pagar</span>
            <span className="text-xl">S/ {calculateTotal()}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          {preferenceId ? (
            <Wallet
              initialization={{ preferenceId }}
              customization={{ texts: { valueProp: "smart_option" } }}
            />
          ) : (
            <Button
              onClick={handleCreatePreference}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Procesando..." : "Proceder al Pago"}
            </Button>
          )}
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="w-full"
          >
            Volver
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Pago Seguro
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>
            • Todas las transacciones son procesadas de forma segura por Mercado
            Pago
          </p>
          <p>• Aceptamos todas las principales tarjetas de crédito y débito</p>
          <p>
            • Los datos de tu tarjeta están protegidos con encriptación de nivel
            bancario
          </p>
          <p>• Recibirás un comprobante de pago en tu correo electrónico</p>
        </CardContent>
      </Card>
    </div>
  );
}
