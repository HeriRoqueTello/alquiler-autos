import { DailyIncomeChart } from "./components/daily-income-chart";
import { OverviewCards } from "./components/overview-cards";
import { ReturnsOverview } from "./components/returns-overview";
import { RentedCarsOverview } from "./components/rented-cars-overview";
import { DateRangePicker } from "./components/date-range-picker";

export default function AdminDashboard() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Bienvenido al panel de administración de AutoRent
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <DateRangePicker />
        </div>
      </div>

      <OverviewCards />

      <div className="grid gap-6 lg:grid-cols-2">
        <DailyIncomeChart />
        <ReturnsOverview />
      </div>

      <RentedCarsOverview />
    </div>
  );
}
