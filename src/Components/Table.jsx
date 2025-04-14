import React, { useState, useMemo } from 'react';

function Table({ data, handleDelete, isLoading = false }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No expenses found. Add your first expense!
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
          <tr>
            <SortableHeader title="Expense" sortKey="name" sortConfig={sortConfig} onSort={requestSort} />
            <th className="px-6 py-3">Description</th>
            <SortableHeader title="Category" sortKey="category" sortConfig={sortConfig} onSort={requestSort} />
            <SortableHeader title="Amount" sortKey="amount" sortConfig={sortConfig} onSort={requestSort} />
            <SortableHeader title="Date" sortKey="date" sortConfig={sortConfig} onSort={requestSort} />
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((expense, index) => (
            <tr key={index} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{expense.name}</td>
              <td className="px-6 py-4 truncate max-w-xs">{expense.description}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300">
                  {expense.category}
                </span>
              </td>
              <td className="px-6 py-4 font-semibold">${parseFloat(expense.amount).toFixed(2)}</td>
              <td className="px-6 py-4">{new Date(expense.date).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDelete?.(expense.id)}
                  className="text-red-600 hover:underline dark:text-red-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SortableHeader = ({ title, sortKey, sortConfig, onSort }) => {
  const direction = sortConfig.key === sortKey ? sortConfig.direction : null;

  return (
    <th
      onClick={() => onSort(sortKey)}
      className="px-6 py-3 cursor-pointer select-none"
    >
      <div className="flex items-center gap-1">
        {title}
        {direction && (direction === 'asc' ? '↑' : '↓')}
      </div>
    </th>
  );
};

export default Table;
