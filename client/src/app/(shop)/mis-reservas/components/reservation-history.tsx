"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  Car,
  Calendar,
  MapPin,
  MoreHorizontal,
  Download,
  Eye,
  Star,
} from "lucide-react";

const reservations = [
  {
    id: "RES-001",
    car: "BMW Serie 3",
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-01-20"),
    location: "Lima",
    status: "completed",
    price: "1,200",
    rating: 5,
  },
  {
    id: "RES-002",
    car: "Mercedes-Benz GLE",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-05"),
    location: "Cusco",
    status: "upcoming",
    price: "1,500",
    rating: null,
  },
  {
    id: "RES-003",
    car: "Audi Q5",
    startDate: new Date("2024-01-05"),
    endDate: new Date("2024-01-10"),
    location: "Arequipa",
    status: "cancelled",
    price: "1,000",
    rating: 4,
  },
  {
    id: "RES-004",
    car: "Toyota Fortuner",
    startDate: new Date("2024-01-25"),
    endDate: new Date("2024-01-30"),
    location: "Lima",
    status: "active",
    price: "800",
    rating: null,
  },
];

const statusStyles = {
  completed: "bg-green-500",
  upcoming: "bg-blue-500",
  cancelled: "bg-red-500",
  active: "bg-yellow-500",
};

const statusText = {
  completed: "Completada",
  upcoming: "Próxima",
  cancelled: "Cancelada",
  active: "Activa",
};

export function ReservationHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.car.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || reservation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todas las Reservas</CardTitle>
        <CardDescription>
          Un total de {reservations.length} reservas encontradas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <Input
              placeholder="Buscar por vehículo o ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="active">Activas</SelectItem>
                <SelectItem value="upcoming">Próximas</SelectItem>
                <SelectItem value="completed">Completadas</SelectItem>
                <SelectItem value="cancelled">Canceladas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Reserva</TableHead>
                <TableHead>Vehículo</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Valoración</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell className="font-medium">
                    {reservation.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      {reservation.car}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {format(reservation.startDate, "d MMM", { locale: es })}{" "}
                        -{" "}
                        {format(reservation.endDate, "d MMM, yyyy", {
                          locale: es,
                        })}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {reservation.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`${
                        statusStyles[reservation.status]
                      } text-white`}
                    >
                      {statusText[reservation.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>S/ {reservation.price}</TableCell>
                  <TableCell>
                    {reservation.rating ? (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{reservation.rating}/5</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Abrir menú</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Ver detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Descargar factura
                        </DropdownMenuItem>
                        {reservation.status === "completed" &&
                          !reservation.rating && (
                            <DropdownMenuItem>
                              <Star className="mr-2 h-4 w-4" />
                              Valorar reserva
                            </DropdownMenuItem>
                          )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
