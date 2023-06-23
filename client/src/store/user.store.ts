import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

type UserInitialState = {
  isLogin: boolean
};

type SetUserState = {
  setIsLogin: (payload: boolean) => void;
};

const initialState: UserInitialState = {
  isLogin: false,
};

const useUserStore = create(
  devtools(
    combine<UserInitialState, SetUserState>(initialState, (set) => ({
      setIsLogin: (payload) => set(() => ({ progress: payload })),
    })),
  ),
);

export default useUserStore;
