import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historial de Reservas | AutoRent",
  description: "Revisa el historial completo de tus reservas de vehículos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
