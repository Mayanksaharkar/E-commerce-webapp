import { useState, useEffect } from "react";
import { NewUser, LoginCredential, User } from "../../Models/User.js";
import url from "../url.js";

import { createContext } from "react";
import { AuthContextProviderProps, AuthContextType } from "./typeInterfaces.js";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currUser, setCurrUser] = useState<User>({} as User);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
    getUserData().then(() => {
      console.log(currUser);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch(
        `${url}/auth/${localStorage.getItem("uid")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const res = await response.json();
      console.log(res);
      setCurrUser(res);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (user: LoginCredential) => {
    try {
      console.log();
      const response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      const res = await response.json();
      console.log(response.status);
      if (response.status === 200) {
        localStorage.setItem("token", res.authToken);
        localStorage.setItem("uid", res.userId);
        setIsLoggedIn(true);
        await getUserData();
      }
      return response.status;

      // return 200;
    } catch (error) {
      return 500;
    }
    // return
  };

  const register = async (newUser: NewUser) => {
    const response = await fetch(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: newUser.fname + " " + newUser.lname,
        email: newUser.email,
        password: newUser.password,
      }),
    });
    if (response.status === 200) {
      const res = await response.json();
      localStorage.setItem("token", res.token);
      localStorage.setItem("uid", res.uid);
      setIsLoggedIn(true);
    }
    await getUserData();
    return response.status;
  };

  const authContextValue: AuthContextType = {
    isLoggedIn: isLoggedIn,
    currUser: {} as User,
    login,
    register,
    getUserData,
    setIsLoggedIn,
    setCurrUser,
    
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
