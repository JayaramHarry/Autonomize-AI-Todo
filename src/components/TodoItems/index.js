import React, { useState } from 'react';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./style.css"

const TodoItem = ({ task, onDelete }) => {
  const [editCount, setEditCount] = useState(0);

  const incrementEditCount = () => {
    setEditCount(prevCount => prevCount + 1);
  };

  return (
    <li className='todo-list-item'>
      <div>
        <span>
          {task.name}
        </span>
        <span> (Updated: {editCount} times)</span>
      </div>
      <div className='options'>
        <FaPen onClick={incrementEditCount} />
        <MdDelete onClick={() => onDelete(task.id)}/>
      </div>
    </li>
  );
}

export default TodoItem;
