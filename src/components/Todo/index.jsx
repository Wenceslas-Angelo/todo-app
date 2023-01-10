import React from 'react';
import PropTypes from 'prop-types';
import crossIcon from './../../images/icon-cross.svg';
import './index.css';

function Todo({ id, title, completed, deleteTodo }) {
  return (
    <div className={completed ? 'todo completed' : 'todo'}>
      <div className="todo-info">
        <div className="check-todo"></div>
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
};

export default Todo;
