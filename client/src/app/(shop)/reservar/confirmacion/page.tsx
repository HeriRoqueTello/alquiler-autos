import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Reserva Confirmada | AutoRent",
  description: "Tu reserva ha sido confirmada exitosamente",
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-10">
      <div className="mx-auto max-w-3xl space-y-8 px-4">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 rounded-full bg-primary/10 p-3 text-primary">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <CardTitle className="text-2xl">¡Reserva Confirmada!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Tu reserva ha sido procesada exitosamente. Hemos enviado un correo
              electrónico con todos los detalles de tu reserva.
            </p>
            <div className="rounded-lg bg-muted p-4 text-left">
              <p className="font-medium">Próximos pasos:</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  Revisa tu correo electrónico para ver los detalles completos
                </li>
                <li>
                  Presenta tu documento de identidad al recoger el vehículo
                </li>
                <li>Llega puntual a la hora acordada de recogida</li>
                <li>No olvides traer tu licencia de conducir vigente</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/historial">Ver mis Reservas</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
