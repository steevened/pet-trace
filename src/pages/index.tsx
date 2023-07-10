import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useStore } from '@/lib/hooks/useStore';
import axios from '../lib/helpers/axios.helper';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
