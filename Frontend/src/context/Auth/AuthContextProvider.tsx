import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext.js";
import { NewUser, User } from "../../Models/User.js";
const AuthContextProvider = ({ children }) => {
  const base_url = "http://localhost:3000/auth";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isLoggedIn]);

  const login = async (user: User) => {
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
    setIsLoggedIn(true);
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
      localStorage.setItem("token", res.authToken);
      setIsLoggedIn(true);
    }
  };


  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, login, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
