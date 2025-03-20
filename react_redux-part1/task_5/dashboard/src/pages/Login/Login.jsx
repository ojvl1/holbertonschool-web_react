// Login.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic
    if (email === "example@example.com" && password === "password") {
      dispatch(login({ email, password }));
    } else {
      // Handle invalid credentials
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render the login form */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;