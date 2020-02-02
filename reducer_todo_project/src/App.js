import React from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <h2>Here you shall add new things you must DO:</h2>
      <TodoList />
    </div>
  );
}

export default App;
