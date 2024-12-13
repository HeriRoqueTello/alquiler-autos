"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useAuthStore } from "@/stores/auth";
import { getProfile } from "@/services/usuario.service";
import { RolEnum } from "@/types/Usuario.types";

const formSchema = z
  .object({
    nombre: z.string().min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    }),
    email: z.string().email({
      message: "Por favor ingresa un correo electrónico válido.",
    }),
    telefono: z.string().min(9, {
      message: "Por favor ingresa un número de teléfono válido.",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener al menos 6 caracteres.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export function RegistroForm() {
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      password: "",
      confirmPassword: "",
    },
  });

  const registro = useAuthStore((state) => state.register);
  const setProfile = useAuthStore((state) => state.setProfile);
  const errors = useAuthStore((state) => state.errors);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Aquí iría la lógica de registro real
    try {
      const { nombre, email, telefono, password } = values;
      const usuarioRegistrado = {
        nombre,
        email,
        telefono,
        password,
        rol: RolEnum.cliente,
      };
      console.log(usuarioRegistrado);
      await registro(usuarioRegistrado);
      const profile = await getProfile();
      console.log(profile);
      setProfile(profile.user);

      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Registro exitoso",
          description: `Bienvenido ${profile.user.nombre}!`,
        });
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error en el registro",
        description: errors.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Juan Pérez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder="tu@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefono"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="987654321" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Registrando..." : "Crear cuenta"}
        </Button>
      </form>
    </Form>
  );
}
