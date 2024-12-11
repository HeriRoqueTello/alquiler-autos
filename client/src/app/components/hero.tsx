export function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-96">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-24 text-center relative z-10">
        <h1 className="text-4xl font-bold text-white">
          OBTEN EL AUTO QUE NECESITAS A UN PRECIO RAZONABLE
        </h1>
        <p className="text-white mt-4">
          Ahora es simple de obtener el automóvil de tu elección con Viaja Libre
          Peru. Disfruta de las mejores ofertas de autos de lujo y económicos.
        </p>
        <button className="mt-6 px-6 py-3 bg-2b4c7e text-white font-bold rounded">
          Buscar
        </button>
      </div>
    </section>
  );
}
