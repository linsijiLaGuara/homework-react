import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
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
    this.setState(({ list }) => ({
        list: list.filter((item, index) => index !== itemKey)
    }));
}
  render() {
    const valueProvide = {
      list: this.state.list,
      deleteCallback: this.deleteItem
  }

    return (
      <ToDoContext.Provider value={valueProvide}>
     <div>
        <input
          type="text"
          id="myInput"
          placeholder="Añade tu tarea..."
          ref={this.itemInput}
        />
        <Button basic
          color="blue"
          className="ingresar" onClick={this.createItem}>
          Añadir Tareas
        </Button>

        <p>Lista de pendientes({valueProvide.list.length})</p>
      </div>
           
      </ToDoContext.Provider>
    );
  }
}

export default Buton;
