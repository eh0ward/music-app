import React, { Component } from "react";
import "./App.css";
import LoginComponent from "./components/LoginComponent";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  toggle = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  render() {
    if (this.state.loggedIn) {
      return <Dashboard />;
    } else {
      return <LoginComponent login={this.toggle} />;
    }
  }
}

export default App;
