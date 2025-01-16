"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const contactInfo = {
  email: "info@autorent.com",
  phone: "+51 123 456 789",
  address: "Av. Principal 123, Lima",
  hours: "Lun - Dom: 9:00 AM - 6:00 PM",
  mapUrl: "https://maps.google.com",
};

const offices = [
  {
    city: "Lima",
    address: "Av. Principal 123, Miraflores",
    phone: "+51 123 456 789",
  },
  {
    city: "Cusco",
    address: "Av. El Sol 456, Centro Histórico",
    phone: "+51 987 654 321",
  },
  {
    city: "Arequipa",
    address: "Av. Ejercito 789, Yanahuara",
    phone: "+51 951 753 852",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Información de Contacto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Teléfono</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Dirección Principal</p>
                <p className="text-sm text-muted-foreground">
                  {contactInfo.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Horario de Atención</p>
                <p className="text-sm text-muted-foreground">
                  {contactInfo.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-6 h-[200px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.964560140787!2d-77.03197792570946!3d-12.046654188118992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x15f0bda5ccbd31eb!2sPlaza%20Mayor%20de%20Lima!5e0!3m2!1ses!2spe!4v1705386547604!5m2!1ses!2spe"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open(contactInfo.mapUrl, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver en Google Maps
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nuestras Oficinas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {offices.map((office) => (
              <div
                key={office.city}
                className="flex flex-col space-y-1 rounded-lg border p-3"
              >
                <h3 className="font-medium">{office.city}</h3>
                <p className="text-sm text-muted-foreground">
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone}`}
                  className="text-sm text-primary hover:underline"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
