import React, { useState } from 'react';

import TodoLists from './components/TodoLists';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    const [taskName, quantity] = parseInputValue(inputValue);
    if (!taskName) return;

    const newTasks = Array.from({ length: quantity }, (_, i) => ({
      id: Date.now() + i,
      name: taskName,
    }));

    setTasks(prevTasks => [...prevTasks, ...newTasks]);
    setTotalCount(prevCount => prevCount + quantity);
    setInputValue('');
  };

  const parseInputValue = (value) => {
    const [taskName, quantityStr] = value.split(' ');
    const quantity = parseInt(quantityStr, 10) || 1;
    return [taskName, quantity];
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setTotalCount(prevCount => prevCount - 1);
  };

  return (
    <div className="todos-bg-container">
      <h1>Day Goals!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write code 3"/>
      <button onClick={addTask}>Add Todo</button>
      <TodoLists tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
