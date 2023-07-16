import { useCities } from '@/lib/services/cities.services';
import Image from 'next/image';
import Link from 'next/link';
import { NextPageWithLayout } from './_app';
import HomeLayout from '@/components/ui/custom/HomeLayout';

const Home: NextPageWithLayout = () => {
  const { data, isLoading, isError } = useCities();

  // console.log(data);

  return (
    <div>
      <div className="w-full h-[80vh] bg-[url(https://images.pexels.com/photos/16922984/pexels-photo-16922984/free-photo-of-german-shepherd-lying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-center bg-no-repeat bg-cover relative flex items-center justify-center text-background text-center">
        <div className="  flex  flex-col">
          <h2 className="text-5xl font-semibold md:text-6xl  mb-10 ">
            Rastro Mascotas
          </h2>
          <h3 className="text-2xl font-medium ">
            La comunidad que rescata y encuentra mascotas perdidas
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="mt-10 text-center">
          <h3 className="mt-2.5 text-2xl font-medium text-muted-foreground">
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
    </div>
  );
};

Home.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
