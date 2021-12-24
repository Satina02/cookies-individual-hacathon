import React from "react";
import { useAuth } from "../../contexts/authContext";
import Home from "../Home/Home";
import Login from "./Login";

const Auth = () => {
  const { user } = useAuth();
  return <div>{user ? <Home /> : <Login />}</div>;
};

export default Auth;
