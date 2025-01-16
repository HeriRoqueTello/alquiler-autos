import { Metadata } from "next";
import { PaymentSummary } from "./components/payment-summary";
import { ReservationStepper } from "../tiempo/components/reservation-stepper";

export const metadata: Metadata = {
  title: "Pago de Reserva | AutoRent",
  description: "Completa el pago de tu reserva de vehículo",
};

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-10">
      <div className="mx-auto max-w-3xl space-y-8 px-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Finalizar Reserva
          </h1>
          <p className="text-muted-foreground">
            Revisa los detalles y completa el pago de tu reserva
          </p>
        </div>
        <ReservationStepper currentStep={4} />
        <PaymentSummary />
      </div>
    </div>
  );
}
