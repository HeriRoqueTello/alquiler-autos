"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { queryKeys } from "@/services/queryKey.service";
import { deleteVehiculo, getAllVehiculos } from "@/services/vehiculo.service";
import { Vehiculo } from "@/types/Vehiculo.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { getVehiculosColumns } from "./components/columns";
import { DataTable } from "./components/data-table";
import VehiculoForm from "./components/form-add";
import { SheetViewVehiculo } from "./components/view-vehiculo";

export default function Vehiculos() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isViewSheetOpen, setIsViewSheetOpen] = useState<boolean>(false);
  const [selectedVehiculo, setSelectedVehiculo] = useState<Vehiculo | null>(
    null
  );
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { data: vehiculos, isFetching } = useQuery({
    queryKey: queryKeys.fetchVehiculos.all,
    queryFn: () => getAllVehiculos(),
    initialData: [],
  });

  const deleteMutation = useMutation({
    mutationFn: deleteVehiculo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.fetchVehiculos.all,
      });
    },
  });

  const onView = useCallback((vehiculo: Vehiculo) => {
    setSelectedVehiculo(vehiculo);
    setIsViewSheetOpen(true);
  }, []);

  const onDelete = useCallback((vehiculo: Vehiculo) => {
    deleteMutation.mutate(vehiculo._id, {
      onSuccess: () => {
        toast({
          description: "Vehiculo ha sido eliminado satisfactoriamente.",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Uh Oh! Algo salio mal!",
          description: "No se pudo eliminar el vehiculo.",
        });
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEdit = useCallback((vehiculo: Vehiculo) => {
    setSelectedVehiculo(vehiculo);
    setIsDialogOpen(true);
  }, []);

  const columns = useMemo(
    () => getVehiculosColumns({ onView, onEdit, onDelete }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Vehiculos</CardTitle>
        <div className="flex justify-between">
          <div />
          <div className="flex-nowrap">
            <VehiculoForm
              isOpen={isDialogOpen}
              vehiculo={selectedVehiculo}
              onOpenChange={(value) => {
                setIsDialogOpen(value);
                if (!value) {
                  setSelectedVehiculo(null);
                }
              }}
            />
            <SheetViewVehiculo
              isOpen={isViewSheetOpen}
              vehiculo={selectedVehiculo}
              onOpenChange={(value) => {
                setIsViewSheetOpen(value);
                if (!value) {
                  setTimeout(() => setSelectedVehiculo(null), 1000);
                }
              }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isFetching && <span>Loading</span>}
        {!isFetching && <DataTable data={vehiculos} columns={columns} />}
      </CardContent>
    </Card>
  );
}
