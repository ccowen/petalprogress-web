import { createContext, useContext } from "react";

interface SignInModalContextType {
  open: () => void;
}

export const SignInModalContext = createContext<SignInModalContextType>({
  open: () => {},
});

export const useSignInModal = () => useContext(SignInModalContext);
