import { Check } from "lucide-react";

const steps = [
  { id: 1, name: "Fechas" },
  { id: 2, name: "Vehículo" },
  { id: 3, name: "Extras" },
  { id: 4, name: "Pago" },
];

interface ReservationStepperProps {
  currentStep: number;
}

export function ReservationStepper({ currentStep }: ReservationStepperProps) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            <div
              className={`group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 
                ${
                  step.id < currentStep
                    ? "border-primary"
                    : step.id === currentStep
                    ? "border-primary"
                    : "border-muted-foreground/20"
                }`}
            >
              <span className="text-sm font-medium">
                {step.id < currentStep ? (
                  <span className="flex items-center gap-2 text-primary">
                    <Check className="h-4 w-4" />
                    {step.name}
                  </span>
                ) : step.id === currentStep ? (
                  <span className="text-primary">{step.name}</span>
                ) : (
                  <span className="text-muted-foreground">{step.name}</span>
                )}
              </span>
              <span className="text-sm">
                {step.id === currentStep && (
                  <span className="text-primary">Paso actual</span>
                )}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
