import {createContext, useContext, useState} from "react";

export interface IAuthContext {
  isLogin: boolean;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('No authContext.Provider found when calling authContext.');
  return authContext;
};

export function AuthProvider({ children }: { children?: JSX.Element }) {
  const setLogin = (payload: boolean): void => {
    setState({
      ...state,
      isLogin: payload
    })
  };
  const initialState = {
    isLogin: false,
  };
  const [state, setState] = useState<IAuthContext>(initialState);
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}