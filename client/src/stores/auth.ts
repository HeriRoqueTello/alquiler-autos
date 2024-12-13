import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Usuario } from "@/types/Usuario.types";
import { getProfile, registerUsuario } from "@/services/usuario.service";

export interface Profile {
  id: string;
  email: string;
  nombre: string;
  rol: string;
  telefono: string;
  exp: number;
  iat: number;
}

type State = {
  token: string;
  profile: Profile;
  isAuth: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: Profile) => void;
  register: (user: Usuario) => void;
  logout: () => void;
  cleanErrors: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      errors: null,
      setToken: (token: string) =>
        set(() => ({
          token,
          isAuth: !!token,
        })),
      register: async (user: Usuario) => {
        try {
          const resRegister = await registerUsuario(user);
          set(() => ({
            token: resRegister.data.token,
            isAuth: true,
          }));
        } catch (error) {
          set(() => ({ errors: error.response.data }));
        }
      },
      setProfile: (profile: Profile) => set(() => ({ profile })),
      getProfile: async () => {
        const resProfile = await getProfile();
        set(() => ({
          profile: resProfile,
        }));
      },
      logout: () => set(() => ({ token: null, profile: null, isAuth: false })),
      cleanErrors: () => set(() => ({ errors: null })),
    }),
    {
      name: "auth",
    }
  )
);