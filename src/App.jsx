import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
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

  //delete todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="title">
            <h1>TODO</h1>
            <img src={moonIcon} alt="moon-icon" />
          </div>
          <TodoForm addTodo={addTodo} />
        </div>
      </header>

      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
