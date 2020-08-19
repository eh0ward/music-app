import React, {Component} from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { TextField, Button } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
}

toggle = () => {
  this.setState({loggedIn: !this.state.isOn})
}


render() {
   return (
    <div>
      <NavBar/>
      <TextField label="Username"/>
      <TextField label="Password"/>
      <Button onClick={this.toggle}>LOGIN</Button>
    </div>
  );
}
}

export default App;
