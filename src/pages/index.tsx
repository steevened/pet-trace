import { useQuery } from '@tanstack/react-query';
import { getCities, useCities } from '@/lib/services/cities.services';
import Image from 'next/image';

export default function Home() {
  const { data, isLoading, isError } = useCities();

  console.log(data);

  return (
    <main className="container">
      <div className="mt-10 text-center">
        <h2 className="text-5xl font-semibold md:text-6xl">Para Cuándo</h2>
        <h3 className="mt-5 text-2xl">Selecciona una ciudad para continuar</h3>
        <ul className="grid gap-5 my-10 sm:grid-cols-2 place-items-center">
          {data?.map((city) => (
            <li
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
              <p className="absolute bottom-0 p-5 font-semibold opacity-0 group-hover:opacity-100 duration-100 z-10">
                {city.name} - {city.country}
              </p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/50 duration-100 z-0" />
            </li>
          ))}
        </ul>
      </div>
      {/* <Navbar /> */}
    </main>
  );
}
