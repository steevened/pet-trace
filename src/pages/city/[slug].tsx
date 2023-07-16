import { NextPageWithLayout } from '../_app';
import { useRouter } from 'next/router';
import { useCityBySlug } from '@/lib/services/cities.services';
import Image from 'next/image';
import HomeLayout from '@/components/layout/HomeLayout';

const CityPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { data, isError, isLoading } = useCityBySlug(
    router.query.slug as string
  );

  const heroStyle = {
    backgroundImage: `url(${data?.image_url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen">
      <div
        className="h-[40vh] relative flex items-center justify-center"
        style={heroStyle}
      >
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
