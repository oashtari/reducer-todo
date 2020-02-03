import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
import './Todo.css'


const TodoCard = ({ state, toggleTodo }) => {
    // const [state] = useReducer(todoReducer, initialState);

    // const [newTodos, setNewTodos] = useState(state);

    const todoItems = state.items.map(todo => {
        return (
            <div >
                <li className={`todo_card${todo.complete ? ' complete' : ''}`}>{todo.item} things</li>
                <button onClick={() => toggleTodo(todo.id)}>Mark Complete</button>
            </div>
        );
    })


    return (
        <div className="todo_card">
            <h1 className="item">{todoItems}</h1>
        </div>
    );
};

export default TodoCard;