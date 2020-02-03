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
            id: 3892987589
        }]
};


export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, items: [...state.items, action.payload] }
            console.log('is state working', state)

        // case 'COMPLETE_TODO':
        //     return {
        //         ...state,

        //     }
        default:
            return state;
    }
}

export default todoReducer;




// export const initialState = [
//     {
//       id: 3892987589,
//       item: 'Learn about reducers',
//       completed: false
//     }
//   ];

//   export const reducer = (state, action) => {
//     switch (action.type) {
//       case 'ADD_TODO':
//         return [...state, action.payload];
//       case 'TOGGLE_TODO':
//         return state.map(todo => {
//           if (todo.id === action.payload) {
//             return { ...todo, completed: !todo.completed }
//           } else {
//             return todo;
//           }
//         });
//       case 'DELETE_TODO':
//         return state.filter(todo => todo.id !== action.payload);
//       case 'CLEAR_COMPLETED_TODOS':
//         return state.filter(todo => !todo.completed);
//       default:
//         console.log('No matching action type');
//         return state;
//     }
//   }