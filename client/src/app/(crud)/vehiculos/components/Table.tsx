import { Vehiculo } from "@/app/utils/types";

interface TableProps {
  vehiculos: Vehiculo[];
  eliminarVehiculo: (id: string) => void;
  modoEditar: (id: string, vehiculo: Vehiculo) => void;
}

export const Table: React.FC<TableProps> = ({
  vehiculos,
  eliminarVehiculo,
  modoEditar,
}) => {
  return (
    <>
      <table
        className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm"
        id="vehicle-table"
      >
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Marca
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Modelo
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Estado
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {vehiculos?.map((vehiculo) => (
            <tr key={vehiculo._id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                {vehiculo.marca}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                {vehiculo.modelo}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 uppercase">
                {vehiculo.estado}
              </td>
              <td className="space-x-2">
                <button
                  className="rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 delay-100 transition-colors"
                  onClick={() => eliminarVehiculo(vehiculo._id!)}
                >
                  Eliminar
                </button>
                <button
                  className="rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 delay-100 transition-colors"
                  onClick={() => modoEditar(vehiculo._id!, vehiculo)}
                >
                  Actualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
