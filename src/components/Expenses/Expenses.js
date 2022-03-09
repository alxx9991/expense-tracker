import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState(2022);

  const expensesFilterChangeHandler = (year) => {
    setFilterYear(parseInt(year));
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onExpenseFilterChange={expensesFilterChangeHandler}
          filterYear={filterYear}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
