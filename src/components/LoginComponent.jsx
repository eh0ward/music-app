import React from "react";
import NavBar from "./NavBar";
import { TextField, Button } from "@material-ui/core";

const LoginComponent = (props) => {
  return (
    <div className="fields">
      <div>
        <NavBar />
      </div>
      <div className="username">
        <TextField label="Username" />
      </div>
      <div className="password">
        <TextField label="Password" />
      </div>
      <div className="login">
        <Button onClick={props.login}>LOGIN</Button>
      </div>
    </div>
  );
};

export default LoginComponent;
