import React from 'react';
import { Button, Input } from "semantic-ui-react";
import { ToDoContext } from './contexts/';


class TodoItem extends React.PureComponent {
    render() {
        return (
            <ul>
                
                    {
                        ({ list }) => // Recibimos los parámetros enviados desde el Provider
                            list.map((item, key) =>
                                <li key={key}>
                                    {item}
                                    <Button>Eliminar</Button>
                                </li>
                            )

                    }
                
            </ul>
        );
    }
}

export default TodoItem;