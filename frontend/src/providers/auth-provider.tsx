import { ReactNode, createContext, useEffect, useState } from "react";

export const authProvider = createContext<AuthProviderProps>(null!);

interface AuthProviderProps {
  loading: boolean;
  loggedIn: boolean;
  email: string;
  token: string;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const signIn = (email: string, password: string) => {};

  const signUp = (email: string, password: string) => {};

  useEffect(() => {}, []);

  const props = {
    loading,
    loggedIn,
    email,
    token,
    signIn,
    signUp,
  };

  return (
    <authProvider.Provider value={props}>{children}</authProvider.Provider>
  );
};
