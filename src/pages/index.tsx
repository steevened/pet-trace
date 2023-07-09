import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useStore } from '@/lib/hooks/useStore';
import axios from '../lib/helpers/axios.helper';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  const { authData, isAuthenticated, setAuthenticated } = useStore();

  const logOut = (): void => {
    googleLogout();
    Cookies.remove('token');
    window.location.reload();
    setAuthenticated();
  };

  useEffect(() => {
    setAuthenticated();
  }, [isAuthenticated]);

  return (
    <main>
      {!isAuthenticated && (
        <GoogleLogin
          onSuccess={async (codeResponse) => {
            if (!codeResponse.credential) {
              return window.location.reload();
            }
            Cookies.set('token', codeResponse.credential);
            try {
              await axios.post('/auth/login');
              setAuthenticated();
            } catch (error) {
              console.log(error);
            }
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          useOneTap={true}
        />
      )}

      {isAuthenticated && (
        <div className="flex flex-col">
          <button onClick={logOut} className="mt-10">
            LOG OUT
          </button>
          <h2>{authData?.name}</h2>
          <h2>{authData?.email}</h2>
          <Image
            src={authData?.picture || ''}
            alt="profile image"
            width={100}
            height={100}
          />
        </div>
      )}
    </main>
  );
}
