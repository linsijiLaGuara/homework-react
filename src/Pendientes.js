
import React, { Component } from 'react';
import { Button,Container,Divider } from 'semantic-ui-react'

import Buton from './Button';
import _ from 'lodash';
import './App.css';
import Borrar from './Borrar';

class Pendientes extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [
        {
          
          name  :"Proyecto de react"
                    
          
         
        }
      ]
    }
  }

  _remove(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }





  render() {
    return (<Divider>
       <Container>
       <h1>Todo list</h1>
            <div className="Pendientes">

              <ul className="Lista de pendientes">
                {this.state.data.map(
                  (borrar,index) =>
                    <Borrar data={borrar} key={index} onRemove={ 
                      () => this._remove(index)} />
                  )
                }

                

              </ul>
            </div>
      </Container>
      </Divider>
    );
  }
}

export default Pendientes;
