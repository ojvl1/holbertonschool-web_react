// Header.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header>
      {/* Render the header content */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
};

export default Header;