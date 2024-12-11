import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Usuario } from "@/types/Usuario.types";

interface SheetViewUsuarioProps {
  usuario: Usuario | null;
  onOpenChange: (value: boolean) => void;
  isOpen: boolean;
}

export function SheetViewUsuario({
  usuario,
  isOpen,
  onOpenChange,
}: SheetViewUsuarioProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{usuario ? usuario.nombre : "No select"}</SheetTitle>
          <SheetDescription>
            Email {(usuario && usuario.email) || ""} - Rol{" "}
            {(usuario && usuario.rol) || ""}
            Telefono {(usuario && usuario.telefono) || ""}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
