export function HeroSection() {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center z-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="text-center space-y-4 p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
          OBTÉN EL AUTO QUE NECESITAS A UN PRECIO RAZONABLE
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Ahora es simple de obtener el automóvil de tu elección con Viaja Libre
          Peru. Disfruta de las mejores ofertas de autos de lujo y económicos.
        </p>
      </div>
    </div>
  );
}
