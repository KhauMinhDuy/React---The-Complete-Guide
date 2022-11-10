import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      {/* <div>{expense.date.toISOString().split('T')[0]}</div> */}
      {/* <div>
				<div>{year}</div>
				<div>{month}</div>
				<div>{day}</div>
			</div> */}
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
