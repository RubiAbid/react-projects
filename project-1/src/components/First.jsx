import React, { useState, useEffect } from "react";
import "../App.css";

const First = () => {
  const [title, setTitle] = useState("");   //initial value nothing
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // ✅ Load from localStorage when app starts
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];   //Open the box and see what’s inside

  });

  //  Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = () => {
    if (!title || !amount || !category) {
      alert("Fill all fields first");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
    };

    setExpenses([...expenses, newExpense]);//copy of old list and new list just created

    //  I want the input boxes to become empty again.
    setTitle("");
    setAmount("");
    setCategory("");
  };

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };


  //array.reduce((accumulator, currentItem) => {
//   return new value;
// }, startingValue);

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="container">
      <h1>EXPENSE TRACKER</h1>

      <div className="inputs">
        <div className="input-group">
          <label className="input-label">Title:</label>
          <input
            className="input-field"
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Amount:</label>
          <input
            className="input-field"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="buttons">
        <select
          className="dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
        </select>

        <button className="btn" onClick={handleAddExpense}>
          + Add Expense
        </button>
      </div>

      <div className="container2">
        {expenses.map((item) => (
          <div className="box" key={item.id}>
            <div className="expense-title">
              {item.title}
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                ❌
              </button>
            </div>
            <div className="expense-details">
              <span className="expense-category">{item.category}</span>
              <span className="expense-amount">${item.amount}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <h3>Total Expense: ${total}</h3>
      </div>
    </div>
  );
};

export default First;
