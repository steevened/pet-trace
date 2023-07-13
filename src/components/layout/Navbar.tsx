import { useStore } from '@/lib/hooks/useStore';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from '@/lib/helpers/axios.helper';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
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

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  });

  return (
    <div className="flex justify-between items-center border py-2 px-4 gap-5">
      <div>
        <Link className="font-semibold text-3xl text-gradient" href={'/'}>
          FG
        </Link>
      </div>
      <form className=" w-full relative">
        <Input className="pl-10" placeholder="Buscar..." />
        <button className="absolute top-1/2 -translate-y-1/2 left-2">
          <Search className="text-foreground/50 hover:text-foreground duration-200" />
        </button>
      </form>
      <nav className="flex justify-between items-center">
        {/* <Button onClick={() => login()} className="bg-red-200">
          log in
        </Button> */}
        {!isAuthenticated && (
          <GoogleLogin
            auto_select
            onSuccess={async (codeResponse) => {
              console.log(`codeResponse`, codeResponse);
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
      </nav>
    </div>
  );
};

export default Navbar;
