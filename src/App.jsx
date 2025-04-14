import React, { useState } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
import SearchBar from './Components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
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
    const filtered = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExpenses(filtered);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">💸 Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <Form onSubmit={addExpense} />
      <Table data={isSearching ? filteredExpenses : expenses} />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
