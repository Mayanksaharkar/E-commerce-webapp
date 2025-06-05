import { createContext, useState } from "react";
import url from "../url";
import { UserContextPropsType, UserContextType } from "./typeInterfaces";
import { User } from "../../Models/User";

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

function UserContextProvider({ children }: UserContextPropsType) {
  const [userInfo, setUserInfo] = useState<User>({} as User);

  const fetchUserInfo = async () => {
    const response = await fetch(
      `${url}/auth/profile/${localStorage.getItem("uid")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const res = await response.json();

    setUserInfo(res);
  };

  const updateInfo = async () => {

    const response = await fetch(
      `${url}/auth/profile/${localStorage.getItem("uid")}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(userInfo),
      }
    );

    return response.status;
  };

  const UserContextValue = {
    fetchUserInfo,
    userInfo,
    setUserInfo,
    updateInfo,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
