"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CalendarPlus, History, UserCog } from "lucide-react";

const actions = [
  {
    title: "Comenzar una reserva",
    description: "Reserva un nuevo vehículo para tu próximo viaje",
    icon: CalendarPlus,
    href: "/reservar",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Historial de reservas",
    description: "Revisa tus reservas anteriores y actuales",
    icon: History,
    href: "/historial",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Administra tu información",
    description: "Actualiza tus datos personales y preferencias",
    icon: UserCog,
    href: "/perfil",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export function DashboardActions() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {actions.map((action, index) => (
        <motion.div
          key={action.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="group cursor-pointer transition-colors hover:bg-muted/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className={`rounded-lg p-2 ${action.bgColor}`}>
                  <action.icon className={`h-5 w-5 ${action.color}`} />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
              <CardTitle className="text-lg">{action.title}</CardTitle>
              <CardDescription>{action.description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
