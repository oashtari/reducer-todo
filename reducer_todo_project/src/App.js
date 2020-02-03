import React from 'react';
import './App.css';
// import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {
  return (
    <div className="App">
      <h1>Here you shall add new things you must DO:</h1>
      <TodoForm />
    </div>
  );
}

export default App;
