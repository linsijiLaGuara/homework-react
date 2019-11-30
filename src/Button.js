import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import{remover} from "./Remover"
import { ToDoContext } from "./contexts/";


class Buton extends Component {
  constructor() {
    super();
    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.itemInput = React.createRef();

    this.state = {
        list: []
    };
}

createItem() {
    const itemValue = this.itemInput.current.value;

    if (itemValue) {
        this.setState({
            list: [
                ...this.state.list,
                itemValue
            ]
        });

        this.itemInput.current.value = '';
        this.itemInput.current.focus();
    }
}

deleteItem(itemKey) {
    /*this.setState(({ list }) => ({
        list: list.filter((item, index) => index !== itemKey)
    }));*/
let{list}=this.state;
let newData=[
  ...list.slice(0,itemKey),
  ...list.slice(itemKey+1),
]

this.setState({list:newData})

}
  render() {
    const valueProvide = {
      list: this.state.list,
      deleteCallback: this.deleteItem
  }

    return (
      <ToDoContext.Provider value={valueProvide}>
     <div clasName = "tareas" >
        <input
          type="text"
          id="myInput"
          placeholder="Añade tu tarea..."
          ref={this.itemInput}
        />
       
        
 <ul className="todo-list">
{valueProvide.list.map(
  (i) =>
    <li list={i} key={i} onRemove={ 
      () => this.deleteItem(i)} >{i}</li>
 

  )
}
 
        <p>Lista de pendientes({valueProvide.list.length})</p>
        </ul>
       
      </div>

      <Button basic
          color="blue"
          className="ingresar" onClick={this.createItem}>
          Añadir Tareas
        </Button>
     
       
       
      </ToDoContext.Provider>
    );
  }
}

export default Buton;
