import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function PromoCard() {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <CardTitle>Superdescuentos</CardTitle>
        </div>
        <CardDescription className="text-primary-foreground/80">
          Paga tus reservas online y llévate increíbles beneficios
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p>
            Obtén mejores precios y promociones realizando el pago de tu reserva
            vía online.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Hasta 20% de descuento</li>
            <li>Acumula puntos de fidelidad</li>
            <li>Cancelación gratuita</li>
            <li>Atención prioritaria</li>
          </ul>
        </div>
        <Button variant="secondary" size="lg" className="w-full">
          Reservar ahora
        </Button>
      </CardContent>
    </Card>
  );
}
