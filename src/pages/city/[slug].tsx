import HomeLayout from '@/components/ui/custom/HomeLayout';
import { NextPageWithLayout } from '../_app';
import { useRouter } from 'next/router';
import { useCityBySlug } from '@/lib/services/cities.services';
import Image from 'next/image';

const CityPage: NextPageWithLayout = () => {
  const router = useRouter();

  const { data, isError, isLoading } = useCityBySlug(
    router.query.slug as string
  );

  console.log(data);

  return (
    <div>
      <div className="h-[calc(100vh-200px)] relative flex items-center justify-center">
        <Image
          src={data?.image_url || ''}
          alt={data?.name || ''}
          width={2000}
          height={2000}
          className="object-cover w-full h-full "
        />
        <div className="absolute text-background z-10">
          <h3 className="text-4xl md:text-5xl font-semibold">{data?.name}</h3>
        </div>
        <div className="absolute inset-0   bg-black/20 z-0 " />
      </div>
    </div>
  );
};
CityPage.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default CityPage;
