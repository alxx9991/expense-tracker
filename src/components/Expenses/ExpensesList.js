import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  if (!filteredExpenses.length)
    return (
      <h2 className="expenses-list__fallback">
        No expenses found for selected month
      </h2>
    );
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};
export default ExpensesList;
