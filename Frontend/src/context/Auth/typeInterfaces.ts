import { ReactNode } from "react";
import { LoginCredential, NewUser, User } from "../../Models/User";

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currUser: User;
  setCurrUser: React.Dispatch<React.SetStateAction<User>>;
  getUserData: () => Promise<void>;
  login: (user: LoginCredential) => Promise<number | undefined>;
  register: (newUser: NewUser) => Promise<number>;
  
}
