"use client";

import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-8">
          <Image
            src="/placeholder.svg"
            alt="Logo"
            width={40}
            height={40}
            className="text-primary"
          />
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Vehículos
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Usuarios
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Button variant="ghost">Login</Button>
          <Button>Registrarte</Button> */}
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/placeholder.svg"
                alt="Wave Logo"
                width={60}
                height={60}
                className="text-blue-500"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">Alquilar de autos</h1>
            <p className="text-gray-600">Inicia sesión para alquilar autos.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              {/* <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="correo@ejemplo.com"
                type="email"
                required
              /> */}
            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required />
            </div>
            <Button className="w-full" size="lg">
              Iniciar sesión
            </Button> */}
          </div>
          <div className="text-center text-sm">
            <p className="text-gray-600">
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Regístrate
              </Link>
            </p>
            <p className="mt-2 text-gray-500 text-xs">
              Al iniciar sesión, aceptas nuestras{" "}
              <Link href="#" className="text-primary hover:underline">
                condiciones de servicio
              </Link>{" "}
              y{" "}
              <Link href="#" className="text-primary hover:underline">
                política de privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
