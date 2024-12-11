"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { queryKeys } from "@/services/queryKey.service";
import { deleteUsuario, getUsuariosByRol } from "@/services/usuario.service";
import { Usuario } from "@/types/Usuario.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { getUsuariosColumns } from "./components/columns";
import { DataTable } from "./components/data-table";
import UsuarioForm from "./components/form-add";
import { SheetViewUsuario } from "./components/view-usuario";

export default function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isViewSheetOpen, setIsViewSheetOpen] = useState<boolean>(false);
  const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { data: usuarios, isFetching } = useQuery({
    queryKey: queryKeys.fetchUsuarios.all,
    queryFn: () => getUsuariosByRol("admin"),
    initialData: [],
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUsuario,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.fetchUsuarios.all,
      });
    },
  });

  const onView = useCallback((usuario: Usuario) => {
    setSelectedUsuario(usuario);
    setIsViewSheetOpen(true);
  }, []);

  const onDelete = useCallback((usuario: Usuario) => {
    deleteMutation.mutate(usuario._id, {
      onSuccess: () => {
        toast({
          description: "Usuario ha sido eliminado satisfactoriamente.",
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

  const onEdit = useCallback((usuario: Usuario) => {
    setSelectedUsuario(usuario);
    setIsDialogOpen(true);
  }, []);

  const columns = useMemo(
    () => getUsuariosColumns({ onView, onEdit, onDelete }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Empleados</CardTitle>
        <div className="flex justify-between">
          <div />
          <div className="flex-nowrap">
            <UsuarioForm
              isOpen={isDialogOpen}
              usuario={selectedUsuario}
              onOpenChange={(value) => {
                setIsDialogOpen(value);
                if (!value) {
                  setSelectedUsuario(null);
                }
              }}
            />
            <SheetViewUsuario
              isOpen={isViewSheetOpen}
              usuario={selectedUsuario}
              onOpenChange={(value) => {
                setIsViewSheetOpen(value);
                if (!value) {
                  setTimeout(() => setSelectedUsuario(null), 1000);
                }
              }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isFetching && <span>Loading</span>}
        {!isFetching && <DataTable data={usuarios} columns={columns} />}
      </CardContent>
    </Card>
  );
}
