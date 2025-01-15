import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil | AutoRent",
  description: "Gestiona tus reservas y datos desde aquí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
