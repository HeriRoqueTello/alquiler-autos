"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

const returns = [
  {
    id: "RET001",
    vehicle: "BMW Serie 3",
    client: "Juan Pérez",
    status: "delayed",
    daysLate: 2,
    extraCharges: 120,
  },
  {
    id: "RET002",
    vehicle: "Mercedes GLE",
    client: "María García",
    status: "onTime",
    extraCharges: 0,
  },
  {
    id: "RET003",
    vehicle: "Audi Q5",
    client: "Carlos López",
    status: "withDamages",
    extraCharges: 350,
  },
  {
    id: "RET004",
    vehicle: "Toyota Fortuner",
    client: "Ana Martínez",
    status: "onTime",
    extraCharges: 0,
  },
];

const statusStyles = {
  delayed: { label: "Atrasado", icon: Clock, className: "bg-yellow-500" },
  onTime: { label: "A tiempo", icon: CheckCircle2, className: "bg-green-500" },
  withDamages: {
    label: "Con daños",
    icon: AlertTriangle,
    className: "bg-red-500",
  },
};

export function ReturnsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Devoluciones Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {returns.map((ret) => {
              const status = statusStyles[ret.status];
              return (
                <div
                  key={ret.id}
                  className="flex items-center justify-between space-x-4 rounded-md border p-4"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{ret.vehicle}</p>
                    <p className="text-sm text-muted-foreground">
                      {ret.client}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge
                      variant="secondary"
                      className={`${status.className} text-white`}
                    >
                      <status.icon className="mr-1 h-3 w-3" />
                      {status.label}
                    </Badge>
                    {ret.extraCharges > 0 && (
                      <span className="text-sm font-medium text-red-500">
                        +S/ {ret.extraCharges}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
