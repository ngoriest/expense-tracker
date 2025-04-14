import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mb-6 w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by name, description, or category..."
        className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
  );
}

export default SearchBar;
