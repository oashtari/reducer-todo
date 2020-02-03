import React, { useReducer, useState, useEffect } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import TodoCard from './TodoCard';

export const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [newTodo, setNewTodo] = useState('');

    const handleChange = e => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleAddTodo(newTodo);
    }

    const handleAddTodo = newTodo => {
        dispatch({ type: "ADD_TODO", payload: { item: newTodo, complete: false, id: Date.now() } })
        setNewTodo('');
    }

    const toggleTodo = id => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
        console.log('are we getting an id?', id)
    }

    const clearCompleted = id => {
        dispatch({ type: 'CLEAR_COMPLETED' });
        console.log('here is what to clear')
    }

    useEffect(() => {
        console.log('testing in  FORM ', state);
    }, [state])

    return (
        <div>
            <input
                className='todo_entry'
                placeholder="Add new Todo"
                type='test'
                name='newTodo'
                value={newTodo}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit new todo</button>

            <h2>Ahhh, yes, here are the things you need to get DONE:</h2>
            <TodoCard toggleTodo={toggleTodo} />
            <button onClick={clearCompleted}>Clear Completed Todos</button>

        </div>
    )
}

export default TodoForm;






// const TodoInput = props => {
//     const [input, setInput] = useState('');

//     const handleInput = e => {
//         setInput(e.target.value);
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (input.length > 3) {
//             props.addTodo(input);
//             setInput('');
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} className="todo-input">
//             <input type="text" value={input} onChange={handleInput} />
//             <button>Add Todo</button>
//             <button onClick={e => { e.preventDefault(); props.clearAllTodos(); }}>Clear Completed</button>
//         </form>
//     )
// }