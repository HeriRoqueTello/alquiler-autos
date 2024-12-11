export default function ServiceSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded">
            <i className="fas fa-car text-4xl text-blue-500"></i>
            <h3 className="text-xl font-bold mt-4">Gran Selección de Autos</h3>
            <p className="mt-2 text-gray-600">
              Tenemos una gran selección de autos para que elijas el que más te
              guste.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <i className="fas fa-shield-alt text-4xl text-blue-500"></i>
            <h3 className="text-xl font-bold mt-4">Garantía de Seguridad</h3>
            <p className="mt-2 text-gray-600">
              Todos nuestros autos pasan por rigurosas inspecciones de
              seguridad.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <i className="fas fa-dollar-sign text-4xl text-blue-500"></i>
            <h3 className="text-xl font-bold mt-4">Precios Competitivos</h3>
            <p className="mt-2 text-gray-600">
              Ofrecemos los mejores precios del mercado para que ahorres en tu
              alquiler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
