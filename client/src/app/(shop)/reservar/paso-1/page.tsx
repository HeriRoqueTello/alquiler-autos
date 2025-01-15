import { Metadata } from "next";
import { ReservationStepper } from "./components/reservation-stepper";
import { DateSelection } from "./components/date-selection";

export const metadata: Metadata = {
  title: "Reservar Vehículo | AutoRent",
  description: "Selecciona las fechas para tu reserva de vehículo",
};

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-10">
      <div className="mx-auto max-w-3xl space-y-8 px-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Reserva tu Vehículo
          </h1>
          <p className="text-muted-foreground">
            Selecciona las fechas de recogida y devolución para comenzar tu
            reserva
          </p>
        </div>
        <ReservationStepper currentStep={1} />
        <DateSelection />
      </div>
    </div>
  );
}
