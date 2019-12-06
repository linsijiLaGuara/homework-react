import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

import Buton from "./Button";
import Pendientes from "./Pendientes";
import { bool, string } from "prop-types";

function Contenedor({  }) {
  return (
   
      <Router>
        <div>
          
        <ul>
          <li>
            <Link to="/">Home</Link>

          </li>
          <p/>
          <li>
            <Link to="/nuevas">Nuevas tareas</Link>
          </li>
           <p/>
          <li>
            <Link to="/Pendientes">Pendientes</Link>
          </li>

          </ul>
          <p/>

          <Switch>
          <Route path="/nuevas">
            <Buton />
          </Route>
          <Route path="/Pendientes">
            <Pendientes />
          </Route>
          <Route path="/">
           </Route>
        </Switch>
      
        </div>
      </Router>
   
  );
}



function Users() {
  return <h2>Tareas</h2>;
}

const s2p = state => {
  return {
    desconectado: !state.logeado,
    ...state
  };
};

Contenedor.propTypes = {
  desconectado: bool,
  logeado: bool,
  username: string
};

export default connect(s2p)(Contenedor);