import { authProvider } from "@/providers/auth-provider";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(authProvider);
};
