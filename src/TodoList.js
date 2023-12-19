import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};
//  //
export default TodoList;
