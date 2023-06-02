import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => handleFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="1"
        max="10"
        onChange={(e) => handleFilterChange('rating', e.target.value)}
      />
    </div>
  );
};

export default Filter;
