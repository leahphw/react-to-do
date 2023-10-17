import React from 'react';

function FilterTasks({ setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter-tasks">
      <label>Filter Tasks: </label>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
    </div>
  );
}

export default FilterTasks;