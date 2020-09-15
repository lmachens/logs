import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({ email });
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email"
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
