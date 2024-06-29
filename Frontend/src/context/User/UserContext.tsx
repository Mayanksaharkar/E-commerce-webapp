import { useEffect, createContext, useState } from "react";

export const UserContext = createContext(0);

function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState();

  const fetchUserInfo = async () => {
    const response = await fetch(
      `http://localhost:3000/auth/profile/${localStorage.getItem("uid")}`,
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
    console.log(userInfo);

    const response = await fetch(
      `http://localhost:3000/auth/profile/${localStorage.getItem("uid")}`,
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

  return (
    <UserContext.Provider
      value={{ fetchUserInfo, userInfo, setUserInfo, updateInfo }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
