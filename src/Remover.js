
import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
class RemoverLista extends Component{
    deleteItem(){
        if(this.props.onRemove)
            this.props.onRemove();
    }
    render(){
        return (
          <li>
              
              <div className="name">
                 
                  <span className="list">{this.props.list}</span>
              </div>
            
              <Button className="remove" basic
          color="blue"
              onClick={this.deleteItem(this.deleteItem.bind(this))}>
                  <i className="semantic-ui-react"> Eliminar  </i>
              </Button>
          </li>
        )
    }
}


export default RemoverLista;