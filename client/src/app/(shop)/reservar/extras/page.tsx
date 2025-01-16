import { Metadata } from "next";

import { ExtrasSelection } from "./components/extras-selection";
import { ReservationStepper } from "../tiempo/components/reservation-stepper";

export const metadata: Metadata = {
  title: "Selección de Extras | AutoRent",
  description: "Personaliza tu reserva con servicios y extras adicionales",
};

export default function ExtrasPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl space-y-8 px-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Personaliza tu Reserva
          </h1>
          <p className="text-muted-foreground">
            Mejora tu experiencia con servicios y extras adicionales
          </p>
        </div>
        <ReservationStepper currentStep={3} />
        <ExtrasSelection />
      </div>
    </div>
  );
}
