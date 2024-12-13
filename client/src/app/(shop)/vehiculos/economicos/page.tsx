import VehiculosCards from "../components/VehiculoCard";

export default function EconomicVehicles() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Vehículos Económicos
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto">
            Descubre nuestra selección de vehículos económicos, perfectos para
            la ciudad y viajes cortos
          </p>
        </div>

        <VehiculosCards />
      </div>
    </div>
  );
}
