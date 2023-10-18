import React from 'react';

function TaskItem({ task, completeTask, deleteTask }) {
  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px', 
  };

  const buttonStyle = {
    marginLeft: '8px', 
    padding: '6px 8px', 
    color: '#65c7f7',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontFamily: 'Space Mono',
    fontWeight: 700,
  };

  const checkBoxStyle = {
    border: 'none',
    padding: '6px 8px',
    borderRadius: '5px',
  };

  return (
    <li style={listItemStyle}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTask(task.id)}
        style={checkBoxStyle}
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button
        onClick={() => deleteTask(task.id)}
        style={{ ...buttonStyle}}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
