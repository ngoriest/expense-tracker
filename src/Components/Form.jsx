// Add at the top if missing
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
      onSubmit(formData); // Send data to parent (App.jsx)
      setFormData({ // Reset form
        name: '',
        description: '',
        category: '',
        amount: '',
        date: ''
      });
    };
  return (
    <div>
        <section>
<div class="border-solid border-2 border-black rounded p-3 ...">
<form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-8">
      <div class="mb-5">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Add Expense</label>
        <label for="text" class="block mb-2 text-sm font-small text-gray-900 dark:text-black">Enter your expense details below</label>
        <input type="text" id="name"value={formData.name} onChange={handleChange} class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter your expense name" required />
      </div>
      <div class="mb-5">
       
        <input type="text" id="description"value={formData.description} onChange={handleChange} class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Enter expense description" required />
      </div>
      <div class="mb-5">
       
       <input type="text" id="category"value={formData.category} onChange={handleChange} class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  placeholder="Enter expense category" required />
     </div>
     <div class="mb-5">
       
       <input type="number" id="amount"value={formData.amount} onChange={handleChange} class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  placeholder="Enter amount" required />
     </div>
      <div class="mb-5">
       
        <input type="date" id="date"value={formData.date} onChange={handleChange} class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  placeholder="mm/dd/yyyy" required />
      </div>
      <div class="flex items-start mb-5">
       
      </div>
      <button
      onClick ={() => toast.success('Expense added successfully!')}
      type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">submit</button>
    </form>
    </div>
    </section>
    </div>
  )
}
export default Form;