import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';


function App() {
  return (
    <div className="App">
      <h2>Here you shall add new things you must DO:</h2>
      <TodoForm />
    </div>
  );
}

export default App;
