import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext.js";
import { NewUser, LoginCredential, User } from "../../Models/User.js";
const AuthContextProvider = ({ children }) => {
  const base_url = "http://127.0.0.1:3000/auth";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currUser, setCurrUser] = useState<User>();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
    getUserData().then(() => {
      console.log(currUser);
    });
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/auth/${localStorage.getItem("uid")}`,
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
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (user: LoginCredential) => {
    console.log();
    const response = await fetch(`${base_url}/login`, {
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
    localStorage.setItem("token", res.authToken);
    localStorage.setItem("uid", res.userId);
    if (response.status === 200) {
      const res = await response.json();
      localStorage.setItem("token", res.authToken);
      setIsLoggedIn(true);
    }
    getUserData();
  };

  const register = async (newUser: NewUser) => {
    const response = await fetch(`${base_url}/register`, {
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
    getUserData();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        register,
        getUserData,
        currUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
