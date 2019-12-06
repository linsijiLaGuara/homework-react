import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

import Buton from "./Button";
import Pendientes from "./Pendientes";
import { bool, string } from "prop-types";

function Contenedor({  }) {
  return (
    <Container>
      <Router>
        <div>
          
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#Tareas">Tareas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">
                  <Link to="/"></Link>
                 
                </Nav.Link>
                <Nav.Link href="#">
                <li>
                     <Link to="/Tareas"></Link>
                     <Buton/>
                     </li>
              </Nav.Link>

              <Nav.Link href="#">

                <li>
                     <Link to="/Pendientes"></Link>
                     <Pendientes/>


              </li>

              </Nav.Link>

          
              </Nav> 
              
        
            </Navbar.Collapse>
          </Navbar>






          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Tareas">
              <Users />
            </Route>
            
            <Route path="/Pendientes">
            
          </Route>

          </Switch>
        </div>
      </Router>
    </Container>
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