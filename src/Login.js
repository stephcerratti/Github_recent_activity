import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

const Login = props => (
  <div class="login">
    <h2>Enter your username to check your recent history</h2>
    <TextField
      name="username"
      handleChange={props.handleChange}
      id="github-username"
      label="Username"
      value={props.username}
    />
    <Button value="Login" handleClick={props.handleLogin} />
  </div>
);

export default Login;
