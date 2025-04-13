import React from 'react';

function Table({ data }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Expense</th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th className="px-4 py-2 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense, index) => (
            <tr key={index} className="bg-white dark:bg-gray-800">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {expense.name}
              </td>
              <td className="px-6 py-4">{expense.description}</td>
              <td className="px-6 py-4">{expense.category}</td>
              <td className="px-6 py-4">${expense.amount}</td>
              <td className="px-6 py-4">{expense.date}</td>
              <td className="px-4 py-2 border">
              <button
                onClick={() => handleDelete(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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

export default Table;