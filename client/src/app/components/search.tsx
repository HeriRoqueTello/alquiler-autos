export default function SearchSection() {
  return (
    <section className="bg-white py-8 shadow-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block">Selecciona tu Auto</label>
            <select className="w-full mt-2 p-2 border rounded">
              <option>Sedan</option>
              <option>SUV</option>
              <option>Deportivo</option>
            </select>
          </div>
          <div>
            <label className="block">Fecha</label>
            <input className="w-full mt-2 p-2 border rounded" type="date" />
          </div>
          <div>
            <label className="block">Selecciona tu Ubicación</label>
            <select className="w-full mt-2 p-2 border rounded">
              <option>Lima</option>
              <option>Arequipa</option>
              <option>Cusco</option>
            </select>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded">
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}
