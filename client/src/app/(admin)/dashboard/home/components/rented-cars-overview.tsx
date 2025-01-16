"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

const carTypeData = [
  { type: "SUV", count: 45, total: 80, percentage: 56 },
  { type: "Sedán", count: 32, total: 50, percentage: 64 },
  { type: "Hatchback", count: 28, total: 40, percentage: 70 },
  { type: "Deportivo", count: 15, total: 20, percentage: 75 },
];

const regionData = [
  { region: "Lima", count: 85, total: 120, percentage: 71 },
  { region: "Cusco", count: 25, total: 40, percentage: 63 },
  { region: "Arequipa", count: 20, total: 30, percentage: 67 },
  { region: "Piura", count: 15, total: 25, percentage: 60 },
];

const clientTypeData = [
  { type: "Particular", count: 120, total: 150, percentage: 80 },
  { type: "Empresarial", count: 45, total: 65, percentage: 69 },
  { type: "Turista", count: 35, total: 50, percentage: 70 },
];

export function RentedCarsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vehículos Alquilados</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="carType">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="carType">Por Tipo</TabsTrigger>
            <TabsTrigger value="region">Por Región</TabsTrigger>
            <TabsTrigger value="clientType">Por Cliente</TabsTrigger>
          </TabsList>
          <TabsContent value="carType">
            <ScrollArea className="h-[300px]">
              <div className="space-y-4 pt-4">
                {carTypeData.map((item) => (
                  <div key={item.type} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{item.type}</p>
                      <span className="text-sm text-muted-foreground">
                        {item.count}/{item.total}
                      </span>
                    </div>
                    <Progress value={item.percentage} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="region">
            <ScrollArea className="h-[300px]">
              <div className="space-y-4 pt-4">
                {regionData.map((item) => (
                  <div key={item.region} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{item.region}</p>
                      <span className="text-sm text-muted-foreground">
                        {item.count}/{item.total}
                      </span>
                    </div>
                    <Progress value={item.percentage} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="clientType">
            <ScrollArea className="h-[300px]">
              <div className="space-y-4 pt-4">
                {clientTypeData.map((item) => (
                  <div key={item.type} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{item.type}</p>
                      <span className="text-sm text-muted-foreground">
                        {item.count}/{item.total}
                      </span>
                    </div>
                    <Progress value={item.percentage} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
