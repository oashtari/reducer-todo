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
            return {
                ...state,
                items: state.items.map(todo => {
                    console.log('did the id make it this far', todo.id)
                    console.log('what is the payload id?', action.payload)
                    console.log('todo', todo)
                    if (todo.id === action.payload) {
                        console.log('IT MATCHES')
                        return { ...todo, complete: !todo.complete }
                    } else {
                        return todo;
                    }
                })
            }

        case 'CLEAR_COMPLETED':
            return {
                ...state,
                items: state.items.filter(todo => {
                    return !todo.complete
                })
            }

        default:
            return state;
    }
}


export default todoReducer;