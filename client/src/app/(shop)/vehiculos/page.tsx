import { Metadata } from "next";
import { VehicleCatalog } from "./components/vehicle-catalog";

export const metadata: Metadata = {
  title: "Catálogo de Vehículos | AutoRent",
  description:
    "Explora nuestra amplia selección de vehículos económicos, SUVs y de lujo",
};

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1524095838546-2d9b8d00f212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-6 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
              Descubre Nuestra Flota Premium
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300 leading-relaxed">
              Desde vehículos económicos hasta lujo, nuestra flota está diseñada
              para satisfacer todas tus necesidades. Encuentra el auto perfecto
              para tu próxima aventura.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white">✓</span>
                <span className="text-gray-200">Precios Competitivos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white">✓</span>
                <span className="text-gray-200">Mantenimiento al Día</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white">✓</span>
                <span className="text-gray-200">Atención 24/7</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative -mt-10">
        <VehicleCatalog />
      </div>
    </div>
  );
}
