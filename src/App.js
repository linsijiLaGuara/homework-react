import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Remover from "./Remover";
import Buton from "./Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Homework</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Buton>
          <Remover />
          </Buton>
         
        </header>
      </div>
    );
  }
}
export default App;
