import React from 'react';
import './Todo.css'


const TodoCard = ({ state, toggleTodo }) => {

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