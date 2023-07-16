import { useStore } from '@/lib/hooks/useStore';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from '@/lib/helpers/axios.helper';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Bell,
  Bone,
  LogOut,
  MessageCircle,
  MoreVertical,
  Search,
  User,
  User2,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

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
    <div className="flex justify-between items-center border py-2 px-4 gap-5 fixed w-full shadow-lg shadow-black/10 z-50 bg-background">
      <div>
        <Link className="font-semibold text-3xl " href={'/'}>
          <Bone className="text-foreground" strokeWidth={2} size={36} />
        </Link>
      </div>
      <form className=" w-full relative">
        <Input className="pl-10" placeholder="Buscar..." />
        <button className="absolute top-1/2 -translate-y-1/2 left-2">
          <Search className="text-muted-foreground hover:text-foreground duration-200" />
        </button>
      </form>
      <nav className="flex justify-between items-center">
        {/* <Button onClick={() => login()} className="bg-red-200">
          log in
        </Button> */}
        {!isAuthenticated && (
          <>
            <div className="hidden md:block">
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
            </div>
            <div className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    variant={'secondary'}
                    className="text-muted-foreground"
                  >
                    <MoreVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="p-0">
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
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        )}
        {isAuthenticated && (
          <div>
            <div className="hidden md:flex gap-5 ">
              <div>
                <Button
                  size={'icon'}
                  variant={'secondary'}
                  className="text-muted-foreground"
                >
                  <Bell />
                </Button>
              </div>
              <div>
                <Button
                  size={'icon'}
                  variant={'secondary'}
                  className="text-muted-foreground"
                >
                  <MessageCircle />
                </Button>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size={'icon'}
                      variant={'secondary'}
                      className="text-muted-foreground"
                    >
                      <User2 />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="m-1 ">
                    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Perfil</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem role="button" onClick={logOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Cerrar sesión</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    variant={'secondary'}
                    className="text-muted-foreground"
                  >
                    <MoreVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="space-y-1">
                  <div className=" ">
                    <Button
                      // size={'icon'}
                      variant={'secondary'}
                      className="text-muted-foreground w-full justify-start gap-2"
                    >
                      <Bell />
                      <span>Notificaciones</span>
                    </Button>
                  </div>
                  <div className=" ">
                    <Button
                      // size={'icon'}
                      variant={'secondary'}
                      className="text-muted-foreground w-full justify-start gap-2"
                    >
                      <MessageCircle />
                      <span>Mensajes</span>
                    </Button>
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          // size={'icon'}
                          variant={'secondary'}
                          className="text-muted-foreground w-full justify-start gap-2"
                        >
                          <User2 />
                          <span>Cuenta</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="m-1 ">
                        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Perfil</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem role="button" onClick={logOut}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Cerrar sesión</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
