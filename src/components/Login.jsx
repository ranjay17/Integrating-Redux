import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login()); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          style={{ margin: "5px", padding: "8px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          style={{ margin: "5px", padding: "8px" }}
        />
        <br />
        <button
          type="submit"
          style={{ marginTop: "10px", padding: "8px 16px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
