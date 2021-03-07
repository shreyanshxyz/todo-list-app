import React from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoList /> 
{/*      <TodoForm /> */}
    </div>
  );
}

export default App;
