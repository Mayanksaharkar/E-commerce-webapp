import { ReactNode } from "react";
import { User } from "../../Models/User";

export interface UserContextPropsType {
  children: ReactNode;
}

export interface UserContextType {
  userInfo: User;
  setUserInfo: React.Dispatch<React.SetStateAction<User>>;
  fetchUserInfo: () => Promise<void>;
  updateInfo: () => Promise<number>;
  
}
