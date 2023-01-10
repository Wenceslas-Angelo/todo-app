import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import moonIcon from './images/icon-moon.svg';

function App() {
  const [todos, setTodos] = useState([]);

  //Add todo
  const addTodo = (title) => {
    const id = new Date().getTime();
    const newTodo = { id, title, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <header>
        <div className="title">
          <h1>TODO</h1>
          <img src={moonIcon} alt="moon-icon" />
        </div>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
