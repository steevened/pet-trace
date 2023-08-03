import Navbar from '@/components/layout/Navbar';
import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';

interface HomeLayoutProps extends PropsWithChildren {}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="pt-[54px] min-h-[calc(100vh-105px)]">{children}</div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
