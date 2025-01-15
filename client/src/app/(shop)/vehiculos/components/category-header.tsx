interface CategoryHeaderProps {
  title: string;
  description: string;
  image: string;
}

export function CategoryHeader({
  title,
  description,
  image,
}: CategoryHeaderProps) {
  return (
    <div className="relative h-[300px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
        }}
      />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="space-y-4 p-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto max-w-xl text-lg text-gray-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
