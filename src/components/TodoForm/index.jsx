import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function TodoForm({ addTodo, input, setInput }) {
  const [error, setError] = useState(false);

  // if (editTodo) {
  //   setInput(editTodo);
  // } else {
  //   setInput('');
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="create a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <span className="error">Error: Empty field</span>}
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func,
  input: PropTypes.string,
  setInput: PropTypes.func,
};

export default TodoForm;
