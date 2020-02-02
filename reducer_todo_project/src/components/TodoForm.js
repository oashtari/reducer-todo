import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import TodoList from './TodoList';

export const TodoForm = (props) => {

    const [todoList, setTodoList] = useState(initialState);


    // const handleChange = e => {
    //     setNewTodo(e.target.value);
    //     console.log(newTodo);
    // }

    return (
        <div>
            <input
                className='todo_entry'
                placeholder="Add new Todo"
                type='test'
                name='newTodo'
            // value={newTodo}
            // onChange={handleChange}
            />
            <button onClick={props.addTodo}>Submit new todo</button>


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