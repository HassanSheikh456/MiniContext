"use client";
import React from "react";
import userContext from "@/context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) return <div className="text-center text-2xl bg-gray-200 p-4 rounded">Login to see your profile</div>;

  return <div className="text-center text-2xl bg-gray-200 p-4 rounded">Welcome {user.username}</div>;
};

export default Profile;