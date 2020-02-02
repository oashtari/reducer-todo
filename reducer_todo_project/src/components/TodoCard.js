import React from 'react';


const TodoCard = props => {
    return (
        <div className="todo_card">
            <h1 className="item">{props.todo}</h1>

            {/* <button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button> */}
        </div>
    );
};

export default TodoCard;



// const Todo = props => {
//     return (
//       <div className="todo">
//         <p style={props.completed ? { textDecoration: 'line-through' } : {}}>{props.item}</p>
//         <div>
//           <button onClick={() => props.toggleTodo(props.id)}>Mark Complete</button>
//           <button onClick={() => props.deleteTodo(props.id)}>X</button>
//         </div>
//       </div>
//     )
//   }