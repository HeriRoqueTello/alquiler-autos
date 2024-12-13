"use client";

import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const isAuth = useAuthStore((state) => state.isAuth);
  useEffect(() => {
    if (isAuth) redirect("/");
  }, [isAuth]);

  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Iniciar sesión</CardTitle>
          <CardDescription>
            Ingresa tus credenciales para acceder a tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
            ¿No tienes una cuenta?{" "}
            <Link
              href="/registro"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Regístrate aquí
            </Link>
          </p>
          <Button variant="link" asChild className="mt-4">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
