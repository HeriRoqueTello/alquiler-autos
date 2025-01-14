import { Card, CardContent } from "@/components/ui/card";
import { Car, DollarSign, Shield } from "lucide-react";

export default function ServiceSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-md">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Car className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Gran Selección de Autos</h3>
            <p className="text-muted-foreground">
              Tenemos una gran selección de autos para que elijas el que más te
              guste.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Garantía de Seguridad</h3>
            <p className="text-muted-foreground">
              Todos nuestros autos pasan por rigurosas inspecciones de
              seguridad.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Precios Competitivos</h3>
            <p className="text-muted-foreground">
              Ofrecemos los mejores precios del mercado para que ahorres en tu
              alquiler.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
