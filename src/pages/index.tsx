import { useCities } from '@/lib/services/cities.services';
import Image from 'next/image';
import Link from 'next/link';
import { NextPageWithLayout } from './_app';
import HomeLayout from '@/components/layout/HomeLayout';

const Home: NextPageWithLayout = () => {
  const { data, isLoading, isError } = useCities();

  return (
    <div>
      <div className="w-full h-[calc(100vh-54px)] bg-[url(https://images.pexels.com/photos/16922984/pexels-photo-16922984/free-photo-of-german-shepherd-lying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center bg-no-repeat bg-cover relative flex items-center justify-center text-background text-center">
        <div className="flex flex-col ">
          <h2 className="mb-10 text-5xl font-semibold md:text-6xl ">
            Pet Trace 
          </h2>
          <h3 className="text-xl font-medium md:text-2xl ">
            La comunidad que rescata y encuentra mascotas perdidas
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="mt-10 text-center">
          <h3 className="mt-2.5 text-4xl font-medium text-foreground">
            Selecciona una ciudad para continuar
          </h3>
          {data?.length === 0 && !isLoading && (
            <div className="mt-10 text-center">
              <h3 className="mt-2.5 text-4xl font-medium text-foreground">
                Información actualmente no disponible
              </h3>
            </div>
          )}
          <ul className="grid gap-5 my-10 sm:grid-cols-2 place-items-center">
            {data?.map((city) => (
              <Link
                href={`/city/${city.slug}`}
                key={city.id}
                className="relative w-full h-64 overflow-hidden rounded-lg group"
              >
                <Image
                  src={city.image_url}
                  alt={city.name}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full duration-200 group-hover:scale-110"
                />
                <p className="absolute bottom-0 z-10 p-5 font-semibold duration-200 group-hover:opacity-100 text-background">
                  {city.name} - {city.country}
                </p>
                <div className="absolute inset-0 z-0 bg-black/50" />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
