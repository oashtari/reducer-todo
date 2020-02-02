export const initialState = [{
    item: 'Learn about reducers',
    complete: false,
    id: 3892987589
},
{
    item: 'one',
    complete: false,
    id: 3892987589
}];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                item: action.payload,
                complete: false,
                id: Date.now()
            }
        // case 'COMPLETE_TODO':
        //     return {
        //         ...state,

        //     }
        default:
            return state;
    }
}

export default todoReducer;