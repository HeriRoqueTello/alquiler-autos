"use client";
import { ReservationHistory } from "./components/reservation-history";
import { ReservationStats } from "./components/reservation-stats";
import { useAuthStore } from "@/stores/auth";
import { redirect } from "next/navigation";

export default function HistoryPage() {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (!isAuth) {
    redirect("/");
  }

  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Historial de Reservas
        </h1>
        <p className="text-muted-foreground">
          Revisa y gestiona todas tus reservas anteriores y actuales
        </p>
      </div>
      <ReservationStats />
      <ReservationHistory />
    </div>
  );
}
