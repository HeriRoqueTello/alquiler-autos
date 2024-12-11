// In Next.js, this file would be called: app/providers.tsx
"use client";

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import {
  // isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           // Tiempo en el que las consultas se consideran frescas
  //           staleTime: 5 * 60 * 1000, // 5 minutos
  //           // Tiempo que los datos de las consultas se mantienen en caché
  //           gcTime: 10 * 60 * 1000, // 10 minutos
  //           // Otras configuraciones por defecto pueden añadirse aquí
  //         },
  //       },
  //     })
  // );
  const [queryClient] = useState(() => new QueryClient());

  const pathname = usePathname();

  const hiddenNavbar = () => pathname.includes("/dashboard");

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {hiddenNavbar() ? null : <Navbar />}

        <main className="container mx-auto">{children}</main>
      </ThemeProvider>
      <Toaster />
    </QueryClientProvider>
  );
}
