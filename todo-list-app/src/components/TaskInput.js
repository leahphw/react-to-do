import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  const inputStyle = {
    fontFamily: 'Space Mono', 
    border: 'none',
    padding: '6px 8px',
    borderRadius: '5px',
    marginBottom: '10px',
    fontWeight: 700,
  };

  const buttonStyle = {
    marginLeft: '8px',
    padding: '6px 8px',
    color: '#65c7f7',
    border: 'none',
    padding: '6px 8px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    fontFamily: 'Space Mono', 
    fontWeight: 700,
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <button onClick={handleAddTask} style={buttonStyle}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;