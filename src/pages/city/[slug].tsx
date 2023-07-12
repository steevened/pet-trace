import HomeLayout from '@/components/ui/custom/HomeLayout';
import { NextPageWithLayout } from '../_app';
import { useRouter } from 'next/router';

const CityPage: NextPageWithLayout = () => {
  const router = useRouter();

  return <div>{router.query.slug}</div>;
};
CityPage.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default CityPage;
