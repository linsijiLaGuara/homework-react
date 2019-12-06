
import React, { Component } from 'react';
import { Container,Divider } from 'semantic-ui-react'
import _ from 'lodash';
import './App.css';
import Borrar from './Borrar';
import Buton from "./Button";
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




//Para Remover la tarea estandar
  render() {
    return (<Divider>
       <Container>
       
            <div className="Pendientes">

 
                {this.state.data.map(
                  (borrar,index) =>
                    <Borrar data={borrar} key={index} onRemove={ 
                      () => this._remove(index)} />
                  )
                }
            </div>
      </Container>
      </Divider>
    );
  }
}

export default Pendientes;
