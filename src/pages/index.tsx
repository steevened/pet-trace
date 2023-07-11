import { useQuery } from '@tanstack/react-query';
import { getCities, useCities } from '@/lib/services/cities.services';

export default function Home() {
  const { data, isLoading, isError } = useCities();

  console.log(data);

  return (
    <main className="">
      <div className="mt-10">
        <h2 className="text-3xl text-center">WELCOME TO PARA CUANDO</h2>
      </div>
      {/* <Navbar /> */}
    </main>
  );
}
