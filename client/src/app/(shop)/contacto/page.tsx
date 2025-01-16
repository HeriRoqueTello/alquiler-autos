import { Metadata } from "next";
import { ContactForm } from "./components/contact-form";
import { ContactInfo } from "./components/contact-info";

export const metadata: Metadata = {
  title: "Contacto | AutoRent",
  description:
    "Contáctanos para cualquier consulta sobre nuestros servicios de alquiler de vehículos",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Contacto</h1>
        <p className="mt-2 text-muted-foreground">
          Estamos aquí para ayudarte. Contáctanos para cualquier consulta.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
