import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { registerUsuario, updateUsuario } from "@/services/usuario.service";
import { CreateUsuarioDto, Usuario } from "@/types/Usuario.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  nombre: z.string(),
  email: z.string().email({ message: "Email invalido" }),
  telefono: z.string(),
  rol: z.enum(["admin", "cliente"]),
});

interface UsuarioFormProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  usuario: Usuario | null;
}

const UsuarioForm = ({ isOpen, onOpenChange, usuario }: UsuarioFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rol: "cliente",
    },
    mode: "onChange",
  });

  const onCreateSuccess = async (newUsuario: Usuario) => {
    await queryClient.setQueryData(
      queryKeys.fetchUsuarios.all,
      (oldData?: Usuario[]) => {
        if (oldData) {
          return [newUsuario, ...oldData];
        }
        return [newUsuario];
      }
    );
    toast({
      description: `Bienvenido ${newUsuario.nombre}!, te has registrado satisfactoriamente.`,
    });
    onOpenChange(false);
  };

  const onUpdateSuccess = async (updatedUsuario: Usuario) => {
    await queryClient.setQueryData(
      queryKeys.fetchUsuarios.all,
      (oldData?: Usuario[]) => {
        if (oldData) {
          return oldData.map((usuario) =>
            usuario._id === updatedUsuario._id ? updatedUsuario : usuario
          );
        }
        return [updatedUsuario];
      }
    );
    toast({
      description: "Usuario actualizado satisfactoriamente.",
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
    mutationFn: registerUsuario,
    onSuccess: onCreateSuccess,
    onError: onRequestError,
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, ...dto }: CreateUsuarioDto & { id: string }) =>
      updateUsuario(id, dto),
    onSuccess: onUpdateSuccess,
    onError: onRequestError,
  });

  useEffect(() => {
    if (usuario) {
      form.reset({
        nombre: usuario.nombre,
        email: usuario.email,
        telefono: usuario.telefono,
        rol: usuario.rol,
      });
    } else {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, usuario]);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
    values: z.infer<typeof formSchema>
  ) => {
    const createDto: CreateUsuarioDto = {
      ...values,
    };
    if (!usuario) {
      createMutation.mutate(createDto);
    } else {
      updateMutation.mutate({ ...createDto, id: usuario._id });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby="" className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {usuario ? "Actualizar el usuario" : "Crear nuevo usuario"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              name="nombre"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="telefono"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="rol"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rol</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el rol del usuario" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cliente">Cliente</SelectItem>
                      <SelectItem value="admin">Empleado</SelectItem>
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

export default UsuarioForm;
