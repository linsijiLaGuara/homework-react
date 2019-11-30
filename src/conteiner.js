import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import RemoverLista from "./Remover";
import Buton from "./Button";


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

                  <Buton/>
                          < RemoverLista/>
                </Nav.Link>
                <Nav.Link href="#">
                  
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