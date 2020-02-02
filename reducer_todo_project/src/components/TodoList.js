import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';



const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    // const [list, setList] = useState(todos);
    // console.log('testing', typeof (todos));
    // console.log('correct list', list);

    const [newTodo, setNewTodo] = useState('');

    // const newTodos = todos.map(todo => {
    //     return <li>{todo.item} things</li>;
    // })

    const handleAddTodo = e => {
        dispatch({ type: "ADD_TODO", paylod: newTodo })
    }

    const handleCompleteTodo = e => {
        dispatch({ type: "COMPLETE_TODO" })
    }



    return (

        <div clasName='todo_list'>
            <TodoForm addTodo={handleAddTodo} />

            <h2>Ahhh, yes, here are the things you need to get DONE:</h2>
            {state.map(todo => (
                <TodoCard key={todo.id} todo={todo.item} />
            ))}
        </div>
        // <h3>{newTodos}</h3>

        // <div className="todo_list">
        //     {state.map((todo, idx) => (
        //         <Todo key={idx} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        //     ))}
        //     <TodoInput addTodo={addTodo} clearAllTodos={clearAllTodos} />
        // </div>



    )
}


export default TodoList;



// import Todo from './Todo';
// import TodoInput from './TodoInput';

// const TodoList = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const addTodo = task => {
//         dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), item: task, completed: false } });
//     }

//     const toggleTodo = id => {
//         dispatch({ type: 'TOGGLE_TODO', payload: id });
//     }

//     const deleteTodo = id => {
//         dispatch({ type: 'DELETE_TODO', payload: id });
//     }

//     const clearAllTodos = () => {
//         dispatch({ type: 'CLEAR_COMPLETED_TODOS', payload: null });
//     }

//     return (
//         <div className="todo-list">
//             {state.map((todo, idx) => (
//                 <Todo key={idx} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
//             ))}
//             <TodoInput addTodo={addTodo} clearAllTodos={clearAllTodos} />
//         </div>
//     )
// }
