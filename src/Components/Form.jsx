import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    toast.success('Expense added successfully!');
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Add New Expense</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Expense Name"
          required
          className="input-field"
        />
        <input
          id="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="input-field"
        />
        <input
          id="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="input-field"
        />
        <input
          id="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
          className="input-field"
        />
        <input
          id="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
