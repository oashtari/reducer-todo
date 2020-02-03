import React, { useEffect, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
// import TodoCard from './TodoCard';
import TodoForm from './TodoForm';
// import { Action } from 'rxjs/internal/scheduler/Action';


const TodoList = () => {
    const [state] = useReducer(todoReducer, initialState);



    useEffect(() => {
        // console.log('testing in LIST COMP', state);
    }, [state]);
    return (
        <div>
            {/* <TodoForm /> */}
            {/* <TodoCard /> */}
        </div>
    )
}

// const TodoList = () => {
//     const [state, dispatch] = useReducer(todoReducer, initialState);

//     // const [todoList, setTodoList] = useState(initialState);

//     console.log('ahhhhh', state);
//     // const handleCompleteTodo = e => {
//     //     dispatch({ type: "COMPLETE_TODO" })
//     // }

//     useEffect(() => {
//         console.log('testing in  LIST ', state);
//     }, [state])

//     return (
//         <div clasName='todo_list'>
//             <TodoForm />
//             {/* <TodoCard /> */}
//         </div>

//     )
// }

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
