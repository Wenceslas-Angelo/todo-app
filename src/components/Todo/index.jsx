import React from 'react';
import PropTypes from 'prop-types';
import crossIcon from './../../images/icon-cross.svg';
import './index.css';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Todo({ id, title, completed, deleteTodo, completedTodo }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <div
      className={completed ? 'todo completed' : 'todo'}
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...attributes}
      {...listeners}
    >
      <div className="todo-info">
        <div className="check-todo" onClick={() => completedTodo(id)}></div>
        <p>{title}</p>
      </div>
      <img src={crossIcon} alt="cross-icon" onClick={() => deleteTodo(id)} />
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  deleteTodo: PropTypes.func,
  completedTodo: PropTypes.func,
};

export default Todo;
