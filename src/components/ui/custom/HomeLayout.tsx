import Navbar from '@/components/layout/Navbar';
import { FC, PropsWithChildren } from 'react';

interface HomeLayoutProps extends PropsWithChildren {}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default HomeLayout;
