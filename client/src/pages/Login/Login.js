import styled from "@emotion/styled";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../api/auth";

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;

  input {
    width: 100%;
    margin: 0.8rem 0;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%;
    background-color: var(--active-color);
    color: var(--base-color);
    margin: 8px 0;
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    :disabled {
      cursor: default;
      background-color: var(--disabled-color);
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({ email });
    history.push("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email"
        autoFocus
      />
      <button disabled={email.trim().length === 0}>Login</button>
    </Form>
  );
};

export default Login;
