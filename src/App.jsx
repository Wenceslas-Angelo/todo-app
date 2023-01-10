import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import moonIcon from './images/icon-moon.svg';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

function App() {
  const [todos, setTodos] = useState([]);
  const [filterName, setFilterName] = useState('all');

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

  //completed todo
  const completedTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  //delete completed todos
  const deleteCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
  };

  //Filter todo
  const filterTodo = () => {
    if (filterName === 'active') {
      return todos.filter((todo) => todo.completed === false);
    } else if (filterName === 'completed') {
      return todos.filter((todo) => todo.completed === true);
    } else {
      return todos;
    }
  };

  //Drag end todo
  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      setTodos((todos) => {
        const activeIndex = todos.findIndex((todo) => todo.id === active.id);
        const overIndex = todos.findIndex((todo) => todo.id === over.id);
        return arrayMove(todos, activeIndex, overIndex);
      });
    }
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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={(e) => handleDragEnd(e)}
        >
          <SortableContext items={todos} strategy={verticalListSortingStrategy}>
            {filterTodo().map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                deleteTodo={deleteTodo}
                completedTodo={completedTodo}
              />
            ))}
          </SortableContext>
        </DndContext>

        {filterTodo().length === 0 && (
          <span className="no-task">No task found</span>
        )}

        <div className="filter">
          <p>
            {filterTodo().length} {filterTodo().length < 2 ? 'item' : 'items'}{' '}
            left
          </p>
          <div className="onglet">
            <p
              className={filterName === 'all' ? 'active' : 'inactive'}
              onClick={() => setFilterName('all')}
            >
              All
            </p>
            <p
              className={filterName === 'active' ? 'active' : 'inactive'}
              onClick={() => setFilterName('active')}
            >
              Active
            </p>
            <p
              className={filterName === 'completed' ? 'active' : 'inactive'}
              onClick={() => setFilterName('completed')}
            >
              Completed
            </p>
          </div>
          <p className="clear-completed" onClick={() => deleteCompleted()}>
            Clear completed
          </p>
        </div>
      </div>

      <p className="drag-drop-info">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
