import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
import './Todo.css'


const TodoCard = props => {
    const [state] = useReducer(todoReducer, initialState);

    // const [newTodos, setNewTodos] = useState(state);

    const todoItems = state.items.map(todo => {
        return (
            <div>
                <div>
                    <li className={`todo_card${todo.complete ? ' complete' : ''}`}>{todo.item} things</li>
                    <button onClick={() => props.toggleTodo(todo.id)}>Mark Complete</button>
                </div>
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