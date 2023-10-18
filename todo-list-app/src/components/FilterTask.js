import React from 'react';

function FilterTasks({ setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const dropBoxStyle = {
    fontFamily: 'Space Mono', 
    border: 'none',
    padding: '6px 8px',
    borderRadius: '5px',
    marginBottom: '10px',
    fontWeight: 700,
  };

  return (
    <div className="filter-tasks">
      <label>Filter Tasks: </label>
      <select onChange={handleFilterChange} style={dropBoxStyle}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
    </div>
  );
}

export default FilterTasks;