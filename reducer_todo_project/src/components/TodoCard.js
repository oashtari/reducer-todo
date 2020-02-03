import React, { useReducer, useEffect, useState } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';


const TodoCard = props => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    // const [newTodos, setNewTodos] = useState(state);

    const todoItems = state.items.map(todo => {
        return <li>{todo.item} things</li>;
    })

    // useEffect(() => {
    //     console.log('testing in form CARD', state);
    // }, [newTodos])


    return (
        <div className="todo_card">
            <h1 className="item">{todoItems}</h1>
        </div>
    );
};

export default TodoCard;



// const Todo = props => {
//     return (
//       <div className="todo">
//         <p style={props.completed ? { textDecoration: 'line-through' } : {}}>{props.item}</p>
//         <div>
//           <button onClick={() => props.toggleTodo(props.id)}>Mark Complete</button>
//           <button onClick={() => props.deleteTodo(props.id)}>X</button>
//         </div>
//       </div>
//     )
//   }