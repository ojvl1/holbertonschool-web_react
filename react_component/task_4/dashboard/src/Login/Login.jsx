import React from "react";
import "./Login.css";
import WithLogging from "../HOC/WithLogging";

function Login() {
  return (
    <>
      <main>
        <div className="App-login">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" autoComplete="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" autoComplete="current-password" />
          <button>OK</button>
        </div>
      </main>
    </>
  );
}

export default WithLogging(Login);