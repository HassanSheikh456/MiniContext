import React from "react";
import UserContextProvider from "../context/UserContextProvider";
import Login from "../components/Home/Login";
import Profile from "../components/Home/Profile";

const Home = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default Home;
