import Navbar from '@/components/layout/Navbar';
import { FC, PropsWithChildren } from 'react';

interface HomeLayoutProps extends PropsWithChildren {}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="pt-[54px]">{children}</div>
    </main>
  );
};

export default HomeLayout;
