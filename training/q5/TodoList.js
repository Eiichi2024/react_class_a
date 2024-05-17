import React from 'react';

const TodoItem = ({ task }) => {
  return <li>{task}</li>;
};

const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
