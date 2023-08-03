import { FC } from 'react';
import { NextPageWithLayout } from '../_app';
import HomeLayout from '@/components/layout/HomeLayout';
import { GetServerSideProps } from 'next';

const AdminPage: NextPageWithLayout = ({}) => {
  return <div>AdminPage</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { token } = req.cookies;

  return {
    props: {},
  };
};

AdminPage.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default AdminPage;
