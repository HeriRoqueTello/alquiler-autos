"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

export default function SearchSection() {
  const [date, setDate] = useState<DateRange | undefined>();
  return (
    <div className="max-w-6xl mx-auto -mt-24 px-4 relative z-10">
      <div className="bg-card dark:bg-card text-card-foreground dark:text-card-foreground rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Selecciona tu Auto</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de vehículo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Economico</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="luxury">Lujo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Fecha</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Selecciona una fecha</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date() }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Selecciona tu Ubicación</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Ciudad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lima">Lima</SelectItem>
              <SelectItem value="cusco">Cusco</SelectItem>
              <SelectItem value="arequipa">Arequipa</SelectItem>
              <SelectItem value="trujillo">Trujillo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
