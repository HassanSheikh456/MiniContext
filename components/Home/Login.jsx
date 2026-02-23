"use client";
import userContext from "@/context/UserContext";
import React, { useState, useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log("User logged in:", { username, password });
  };

  return (
    <div className="text-center space-x-2 text-bold m-4 text-2xl bg-gray-200 p-4 rounded">
      <h2 className="font-bold text-3xl py-3 ">Login</h2>
      <input
        className="border-2 px-0.5"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {"  "}
      <input
        className="border-2 px-0.5"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
      className="bg-blue-500 text-white px-4 py-0.5 rounded hover:bg-blue-700"
       onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
