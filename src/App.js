import React, { Component } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import "./App.css";

import store from "./contexts/store";
import Contenedor from "./conteiner";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Provider store={store}>
          <h1>Homework</h1>
          
          <img src={logo} className="App-logo" alt="logo" />
   
            
    <Contenedor />
  </Provider>
  
        </header>
      </div>
    );
  }
}
export default App;
