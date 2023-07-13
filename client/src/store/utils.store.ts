import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

type UtilsInitialState = {
  page: number;
};

type SetUtilsStore = {
  setPage: (payload: number) => void;
};

const initialState: UtilsInitialState = {
  page: 1,
};

const useUtilsStore = create(
  devtools(
    combine<UtilsInitialState, SetUtilsStore>(initialState, (set) => ({
      setPage: (payload) => set(() => ({ page: payload })),
    })),
  ),
);

export default useUtilsStore;
