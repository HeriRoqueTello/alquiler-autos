import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, MapPin, Calendar } from 'lucide-react'

const activities = [
  {
    id: 1,
    car: "BMW Serie 3",
    status: "Activa",
    location: "Lima",
    date: "15 Ene - 20 Ene",
    statusColor: "bg-green-500",
  },
  {
    id: 2,
    car: "Audi A4",
    status: "Completada",
    location: "Cusco",
    date: "1 Ene - 5 Ene",
    statusColor: "bg-gray-500",
  },
  {
    id: 3,
    car: "Mercedes GLE",
    status: "Próxima",
    location: "Arequipa",
    date: "1 Feb - 5 Feb",
    statusColor: "bg-blue-500",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
        <CardDescription>
          Tus últimas reservas y próximos alquileres
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between space-x-4 rounded-lg border p-4"
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Car className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{activity.car}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {activity.location}
                    <Calendar className="h-3 w-3 ml-2" />
                    {activity.date}
                  </div>
                </div>
              </div>
              <Badge
                variant="secondary"
                className={`${activity.statusColor} text-white`}
              >
                {activity.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

