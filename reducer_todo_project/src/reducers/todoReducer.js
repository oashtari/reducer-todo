export const initialState = {
    items: [
        {
            item: 'Learn about reducers',
            complete: false,
            id: 3892987589
        },
        {
            item: 'one',
            complete: false,
            id: 3892987589234243
        }]
};


export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, items: [...state.items, action.payload] };

        case 'TOGGLE_TODO':
            return state.items.map(todo => {
                console.log('did the id make it this far', todo.id)
                console.log('what is the payload id?', action.payload)
                console.log('todo', todo)
                if (todo.id === action.payload) {
                    console.log('IT MATCHES')
                    return { ...todo, complete: true }
                } else {
                    return todo;
                }
            })

        case 'CLEAR_COMPLETED':
            return state.items.filter(todo => {
                console.log('STUFF TO CLEAR')
                return { ...todo, complete: true }
            })

        default:
            return state;
    }
}


export default todoReducer;

// clearTodos = () => {
//     const newState = {
//       ...this.state,
//       todoList: this.state.todoList.filter(item => {
//         return !item.complete;
//       })
//     }
//     this.setState(newState);
//   }


// STEP 4 - Toggle the completed field
// Build a function that will dispatch an action to toggle a todo's completed field
// Invoke this new function when you click on a todo
// Style your todo to somehow show that it is completed(be creative here!)
// Write the case in your reducer for toggling the completed property


// STEP 5 - Clearing completed todos
// Build a function that will dispatch an action to filter out any completed todos
// Invoke this new function when you click on a "Clear completed" button
// Write the case in your reducer for filtering completed todos



// export const initialState = [
//     {
//         id: 3892987589,
//         item: 'Learn about reducers',
//         completed: false
//     }
// ];

// export const reducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [...state, action.payload];
//         case 'TOGGLE_TODO':
//             return state.map(todo => {
//                 if (todo.id === action.payload) {
//                     return { ...todo, completed: !todo.completed }
//                 } else {
//                     return todo;
//                 }
//             });
//         case 'DELETE_TODO':
//             return state.filter(todo => todo.id !== action.payload);
//         case 'CLEAR_COMPLETED_TODOS':
//             return state.filter(todo => !todo.completed);
//         default:
//             console.log('No matching action type');
//             return state;
//     }
// }