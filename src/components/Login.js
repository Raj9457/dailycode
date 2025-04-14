import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authActions";

const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { name: userName };
    dispatch(login(user));
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        placeholder="Enter User Name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
