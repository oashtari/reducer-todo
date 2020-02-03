import React, { useState, useEffect, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';
import { Action } from 'rxjs/internal/scheduler/Action';



const TodoList = () => {
    // const [state, dispatch] = useReducer(todoReducer, initialState);

    const [todoList, setTodoList] = useState(initialState);


    // const newTodos = todos.map(todo => {
    //     return <li>{todo.item} things</li>;
    // })



    // const handleCompleteTodo = e => {
    //     dispatch({ type: "COMPLETE_TODO" })
    // }

    // useEffect(() => {
    //     console.log('testing', state);
    // }, [state])

    return (

        <div clasName='todo_list'>
            <TodoForm />

            <h2>Ahhh, yes, here are the things you need to get DONE:</h2>
            <TodoCard />
        </div>

    )
}


export default TodoList;




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
