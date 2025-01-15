"use client";
import { useAuthStore } from "@/stores/auth";
import { redirect } from "next/navigation";
import { DashboardActions } from "./components/dashboard-actions";
import { DashboardHeader } from "./components/dashboard-header";
import { PromoCard } from "./components/promo-card";
import { RecentActivity } from "./components/recent-activity";
import { UserStats } from "./components/user-stats";

export default function DashboardPage() {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (!isAuth) {
    redirect("/");
  }

  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <DashboardHeader />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="col-span-2 space-y-6">
          <UserStats />
          <DashboardActions />
          <RecentActivity />
        </div>
        <div>
          <PromoCard />
        </div>
      </div>
    </div>
  );
}
