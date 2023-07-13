import { useCities } from '@/lib/services/cities.services';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { data, isLoading, isError } = useCities();

  // console.log(data);

  return (
    <div className="container">
      <div className="mt-10 text-center">
        <h2 className="text-5xl font-semibold md:text-6xl text-gradient  py-1">
          Para Hoy
        </h2>
        <h3 className="mt-2.5 text-2xl font-medium">
          Selecciona una ciudad para continuar
        </h3>
        <ul className="grid gap-5 my-10 sm:grid-cols-2 place-items-center">
          {data?.map((city) => (
            <Link
              href={`/city/${city.slug}`}
              key={city.id}
              className="relative w-full h-64 border rounded-lg group overflow-hidden"
            >
              <Image
                src={city.image_url}
                alt={city.name}
                width={1000}
                height={1000}
                className="object-cover w-full h-full "
              />
              <p className="absolute bottom-0 p-5 font-semibold opacity-0 group-hover:opacity-100 duration-100 z-10 text-background">
                {city.name} - {city.country}
              </p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/50 duration-100 z-0" />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
