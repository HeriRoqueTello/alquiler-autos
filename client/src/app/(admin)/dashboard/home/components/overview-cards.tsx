import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Car,
  Users,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Ingresos Totales
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">S/ 45,231.89</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center gap-1">
              +20.1% <ArrowUpRight className="h-3 w-3" />
            </span>
            respecto al mes anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Vehículos Alquilados
          </CardTitle>
          <Car className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center gap-1">
              +12.5% <ArrowUpRight className="h-3 w-3" />
            </span>
            respecto al mes anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Usuarios Activos
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,345</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center gap-1">
              +8.1% <ArrowUpRight className="h-3 w-3" />
            </span>
            respecto al mes anterior
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Devoluciones Atrasadas
          </CardTitle>
          <Car className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500 flex items-center gap-1">
              +2.3% <ArrowDownRight className="h-3 w-3" />
            </span>
            respecto al mes anterior
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
