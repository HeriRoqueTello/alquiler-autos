import { Usuario } from "@/types/Vehiculo.types";

interface TableProps {
  usuarios: Usuario[];
  // eliminarVehiculo: (id: string) => void;
  // modoEditar: (id: string, vehiculo: Vehiculo) => void;
}

export const Table: React.FC<TableProps> = ({
  usuarios,
  // eliminarVehiculo,
  // modoEditar,
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
              Nombre
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Telefono
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Password
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Rol
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {usuarios?.map((vehiculo) => (
            <tr key={vehiculo._id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                {vehiculo.nombre}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                {vehiculo.email}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                {vehiculo.telefono}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 uppercase">
                {vehiculo.password}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 uppercase">
                {vehiculo.rol}
              </td>
              <td className="space-x-2">
                <button
                  className="rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 delay-100 transition-colors"
                  // onClick={() => eliminarVehiculo(vehiculo._id!)}
                >
                  Eliminar
                </button>
                <button
                  className="rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 delay-100 transition-colors"
                  // onClick={() => modoEditar(vehiculo._id!, vehiculo)}
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
