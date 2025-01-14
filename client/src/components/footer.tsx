import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Car,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Sobre Nosotros */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">AutoRent</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Tu mejor opción para alquilar vehículos en Perú. Ofrecemos una
              amplia gama de autos con el mejor servicio y precios competitivos.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos/economicos"
                  className="text-muted-foreground hover:text-primary"
                >
                  Económicos
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos/suvs"
                  className="text-muted-foreground hover:text-primary"
                >
                  SUVs
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos/lujo"
                  className="text-muted-foreground hover:text-primary"
                >
                  De Lujo
                </Link>
              </li>
              <li>
                <Link
                  href="/reservas"
                  className="text-muted-foreground hover:text-primary"
                >
                  Reservas
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">
                  Av. Principal 123, Lima, Perú
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:+51123456789"
                  className="text-muted-foreground hover:text-primary"
                >
                  +51 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:info@autorent.pe"
                  className="text-muted-foreground hover:text-primary"
                >
                  info@autorent.pe
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Suscríbete para recibir las últimas ofertas y novedades.
            </p>
            <form
              className="flex flex-col space-y-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="max-w-sm"
              />
              <Button type="submit" className="w-fit">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AutoRent. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link href="/privacidad" className="hover:text-primary">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-primary">
              Términos y Condiciones
            </Link>
            <Link href="/cookies" className="hover:text-primary">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
