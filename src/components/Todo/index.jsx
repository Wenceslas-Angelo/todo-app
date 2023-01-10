import React from 'react';
import PropTypes from 'prop-types';
import crossIcon from './../../images/icon-cross.svg';
import './index.css';

function Todo({ title, completed }) {
  return (
    <div className={completed ? 'todo completed' : 'todo'}>
      <div className="todo-info">
        <div className="check-todo"></div>
        <p>{title}</p>
      </div>
      <img src={crossIcon} alt="cross-icon" />
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
};

export default Todo;
