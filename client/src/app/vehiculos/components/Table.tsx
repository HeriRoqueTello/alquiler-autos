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
      <table id="vehicle-table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos?.map((vehiculo) => (
            <tr key={vehiculo._id}>
              <td>{vehiculo.marca}</td>
              <td>{vehiculo.modelo}</td>
              <td className="uppercase">{vehiculo.estado}</td>
              <td>
                <button
                  className="mr-2"
                  onClick={() => eliminarVehiculo(vehiculo._id!)}
                >
                  Eliminar
                </button>
                <button onClick={() => modoEditar(vehiculo._id!, vehiculo)}>
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
