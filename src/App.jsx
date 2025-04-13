import React, { useState } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
import SearchBar from './Components/SearchBar';
import { ToastContainer } from 'react-toastify';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    // If we're in search mode, update the filtered list too
    if (isSearching) {
      setFilteredExpenses([...filteredExpenses, newExpense]);
    }
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const filtered = expenses.filter(expense => 
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExpenses(filtered);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 dark:text-black">Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <Form onSubmit={addExpense} />
      <Table data={isSearching ? filteredExpenses : expenses} />
      <ToastContainer />
    </div>
  );
}

export default App;