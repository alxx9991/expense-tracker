import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [formShowing, setFormShowing] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const showFormHandler = (event) => {
    setFormShowing((prevFormShowing) => !prevFormShowing);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formShowing) {
      setFormShowing(true);
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    if (expenseData.title && expenseData.amount && expenseData.date) {
      onSaveExpenseData(expenseData);
      setFormShowing(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {formShowing ? (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      ) : null}
      <div className="new-expense__control">
        {formShowing ? <button onClick={showFormHandler}>Cancel</button> : null}
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
