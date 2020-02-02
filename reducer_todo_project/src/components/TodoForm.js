import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import TodoList from './TodoList';

export const TodoForm = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);
    // console.log(state);
    const [newTodo, setNewTodo] = useState('');
    const [todoList, setTodoList] = useState(initialState);


    const handleChange = e => {
        setNewTodo(e.target.value);
        console.log(newTodo);
    }

    const handleAddTodo = e => {
        dispatch({ type: "ADD_TODO", paylod: newTodo })
    }

    const handleCompleteTodo = e => {
        dispatch({ type: "COMPLETE_TODO" })
    }

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
            <button onClick={handleAddTodo}>Submit new todo</button>

            <h2>Ahhh, yes, here are the things you need to get DONE:</h2>
            <TodoList todos={todoList} />
        </div>
    )
}

export default TodoForm;


// const TodoInput = props => {
//     const [input, setInput] = useState('');

//     const handleInput = e => {
//       setInput(e.target.value);
//     }

//     const handleSubmit = e => {
//       e.preventDefault();
//       if (input.length > 3) {
//         props.addTodo(input);
//         setInput('');
//       }
//     }

//     return (
//       <form onSubmit={handleSubmit} className="todo-input">
//         <input type="text" value={input} onChange={handleInput} />
//         <button>Add Todo</button>
//         <button onClick={e => { e.preventDefault(); props.clearAllTodos(); }}>Clear Completed</button>
//       </form>
//     )
//   }