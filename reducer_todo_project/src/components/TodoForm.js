import React, { useReducer, useState, useEffect } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

export const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [newTodo, setNewTodo] = useState('');

    const handleChange = e => {
        setNewTodo(e.target.value);
        // console.log('updated todo:', newTodo);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleAddTodo(newTodo);
        // console.log('post submit', newTodo)
    }

    const handleAddTodo = newTodo => {
        dispatch({ type: "ADD_TODO", payload: { item: newTodo, complete: false, id: Date.now() } })
        console.log('testing newTodo', newTodo)
    }

    useEffect(() => {
        console.log('testing in form comp', state);
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