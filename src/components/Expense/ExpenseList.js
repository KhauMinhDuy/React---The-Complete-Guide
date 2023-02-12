import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {

    let {items} = props;

    let expenseContent = <h2 className="expenses-list__fallback">Found no expenses</h2>;
    if (items.length > 0) {
        expenseContent = items.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense}/>
        ));
    }

    return (
        <ul className="expenses-list">
            {expenseContent}
        </ul>
    );
};

export default ExpenseList;