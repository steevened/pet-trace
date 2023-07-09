import { create } from 'zustand';
import Cookies from 'js-cookie';
import axios from '../helpers/axios.helper';

interface authState {
  isAuthenticated: boolean;
  authData: AuthData | undefined;
  setAuthenticated: () => void;
}

interface AuthData {
  name: string;
  email: string;
  picture?: string;
  roles: string[];
}

export const useStore = create<authState>()((set) => ({
  isAuthenticated: false,
  authData: undefined,

  setAuthenticated: () => {
    const token = Cookies.get('token');

    if (token) {
      axios
        .post('auth/login')
        .then((res) => {
          // console.log(res.data);
          set({ isAuthenticated: true });
          set({ authData: res.data });
        })
        .catch((error) => console.log(error));
    } else {
      set({ isAuthenticated: false });
      set({ authData: undefined });
    }
  },
}));
