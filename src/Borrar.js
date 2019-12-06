import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
class Borrar extends Component{
    _remove(){
        if(this.props.onRemove)
            this.props.onRemove();
    }
    render(){
        return (
          <li>
             
              <div className="name">
                  <span className="borrar-Pendientes">{this.props.data.name}</span>
                  
              </div>
              
              <Button basic
          color="blue" className="remove" onClick={this._remove.bind(this)}>
                  <i className="semantic-ui-react">Eliminar</i>
              </Button>
          </li>
        )
    }
}


export default Borrar;
