import React from 'react';

const TodoItem = ({ task, toggleComplete, removeTask }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
