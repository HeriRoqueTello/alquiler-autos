import { Metadata } from "next";
import { VehicleSelection } from "./components/vehicle-selection";
import { ReservationStepper } from "../paso-1/components/reservation-stepper";

export const metadata: Metadata = {
  title: "Selección de Vehículo | AutoRent",
  description: "Elige el vehículo perfecto para tu reserva",
};

export default function VehicleSelectionPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl space-y-8 px-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Elige tu Vehículo
          </h1>
          <p className="text-muted-foreground">
            Selecciona el vehículo que mejor se adapte a tus necesidades
          </p>
        </div>
        <ReservationStepper currentStep={2} />
        <VehicleSelection />
      </div>
    </div>
  );
}
