import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/AuthSlice";
import Login from "./components/Login";
import CounterComponent from "./components/CounterComponent";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Auth</h1>

      {!isAuthenticated ? (
        <Login />
      ) : (
        <>
          <h2>Welcome, User!</h2>
          <p>You are now logged in.</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <CounterComponent />
        </>
      )}
    </div>
  );
};

export default App;
