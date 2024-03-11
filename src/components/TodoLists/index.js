import React from 'react';

import TodoItems from '../TodoItems';

import "./style.css"

const TodoLists = ({ tasks, onDelete }) => (
  <ul>
    {tasks.map(task => (
      <TodoItems key={task.id} task={task} onDelete={onDelete} />
    ))}
  </ul>
);

export default TodoLists;
