"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, differenceInDays, format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export function DateSelection() {
  const router = useRouter();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  const numberOfDays =
    date?.from && date?.to ? differenceInDays(date.to, date.from) + 1 : 0;

  const basePrice = 100; // Precio base por día
  const totalPrice = numberOfDays * basePrice;

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Selección de Fechas</CardTitle>
          <CardDescription>
            Elige las fechas de recogida y devolución de tu vehículo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left sm:w-[300px]",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "d 'de' MMMM", { locale: es })} -{" "}
                        {format(date.to, "d 'de' MMMM, yyyy", { locale: es })}
                      </>
                    ) : (
                      format(date.from, "d 'de' MMMM, yyyy", { locale: es })
                    )
                  ) : (
                    <span>Selecciona las fechas</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  locale={es}
                  disabled={{ before: new Date() }}
                />
              </PopoverContent>
            </Popover>

            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div>
                <p className="text-sm font-medium">Duración del Alquiler</p>
                <p className="text-2xl font-bold">{numberOfDays} días</p>
              </div>
            </div>
          </div>

          <Card className="bg-muted">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Precio por día</span>
                  <span>S/ {basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Número de días</span>
                  <span>{numberOfDays}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total estimado</span>
                  <span>S/ {totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  *El precio final puede variar según el vehículo seleccionado y
                  los extras
                </p>
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => router.back()} variant="outline">
            Cancelar
          </Button>
          <Button
            onClick={() => router.push("/reservar/vehiculo")}
            disabled={!date?.to}
          >
            Continuar
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Información Importante</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            • Las reservas deben realizarse con al menos 24 horas de
            anticipación
          </p>
          <p>• La hora de recogida y devolución estándar es a las 12:00 PM</p>
          <p>• Se requiere una tarjeta de crédito válida para la reserva</p>
          <p>
            • Cancelación gratuita hasta 48 horas antes de la fecha de recogida
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
