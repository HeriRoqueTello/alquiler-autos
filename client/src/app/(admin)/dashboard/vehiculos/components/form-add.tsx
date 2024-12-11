import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { queryKeys } from "@/services/queryKey.service";
import { createVehiculo, updateVehiculo } from "@/services/vehiculo.service";
import { CreateVehiculoDto, Vehiculo } from "@/types/Vehiculo.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  marca: z
    .string()
    .min(1, { message: "La marca esta vacia" })
    .max(50, { message: "La marca no puede tener mas de 50 caracteres" }),
  modelo: z
    .string()
    .min(1, { message: "El modelo esta vacio" })
    .max(50, { message: "El modelo no puede tener mas de 50 caracteres" }),
  imagen: z.string(),
  estado: z.enum(["disponible", "reservado", "mantenimiento"]),
});

interface VehiculoFormProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  vehiculo: Vehiculo | null;
}

const VehiculoForm = ({
  isOpen,
  onOpenChange,
  vehiculo,
}: VehiculoFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      estado: "disponible",
    },
    mode: "onChange",
  });

  const onCreateSuccess = async (newVehiculo: Vehiculo) => {
    await queryClient.setQueryData(
      queryKeys.fetchVehiculos.all,
      (oldData?: Vehiculo[]) => {
        if (oldData) {
          return [newVehiculo, ...oldData];
        }
        return [newVehiculo];
      }
    );
    toast({
      description: "Vehiculo agregado satisfactoriamente.",
    });
    onOpenChange(false);
  };

  const onUpdateSuccess = async (updatedVehiculo: Vehiculo) => {
    await queryClient.setQueryData(
      queryKeys.fetchVehiculos.all,
      (oldData?: Vehiculo[]) => {
        if (oldData) {
          return oldData.map((vehiculo) =>
            vehiculo._id === updatedVehiculo._id ? updatedVehiculo : vehiculo
          );
        }
        return [updatedVehiculo];
      }
    );
    toast({
      description: "Vehiculo modificado satisfactoriamente.",
    });
    onOpenChange(false);
  };

  const onRequestError = () => {
    toast({
      variant: "destructive",
      title: "Uh Oh! Algo salio mal!",
      description: "No se pudo completar la solicitud.",
    });
  };

  const createMutation = useMutation({
    mutationFn: createVehiculo,
    onSuccess: onCreateSuccess,
    onError: onRequestError,
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, ...dto }: CreateVehiculoDto & { id: string }) =>
      updateVehiculo(id, dto),
    onSuccess: onUpdateSuccess,
    onError: onRequestError,
  });

  useEffect(() => {
    if (vehiculo) {
      form.reset({
        marca: vehiculo.marca,
        modelo: vehiculo.modelo,
        imagen: vehiculo.imagen,
        estado: vehiculo.estado,
      });
    } else {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, vehiculo]);

  const resetForm = () => {
    form.reset({
      marca: "",
      modelo: "",
      imagen: "",
      estado: "disponible",
    });
  };

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
    values: z.infer<typeof formSchema>
  ) => {
    const createDto: CreateVehiculoDto = {
      marca: values.marca,
      modelo: values.modelo,
      imagen: values.imagen,
      estado: values.estado,
    };
    if (!vehiculo) {
      createMutation.mutate(createDto);
    } else {
      updateMutation.mutate({ ...createDto, id: vehiculo._id });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button onClick={resetForm} size="sm">
          Agregar
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby="" className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {vehiculo ? "Actualizar el vehiculo" : "Crear nuevo vehiculo"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              name="marca"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marca</FormLabel>
                  <FormControl>
                    <Input placeholder="KIA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="modelo"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Modelo</FormLabel>
                  <FormControl>
                    <Input placeholder="Prime" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="imagen"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagen</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="estado"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el estado del vehiculo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="disponible">Disponible</SelectItem>
                      <SelectItem value="reservado">Reservado</SelectItem>
                      <SelectItem value="mantenimiento">
                        Mantenimiento
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            type="button"
            disabled={!form.formState.isValid || createMutation.isPending}
            onClick={form.handleSubmit(onSubmit)}
          >
            {createMutation.isPending && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VehiculoForm;
