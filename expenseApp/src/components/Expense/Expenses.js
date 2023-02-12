import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import {useState} from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({expenses}) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpense = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={selectedYear} onFilterChange={filterChangeHandler}/>
                <ExpenseChart expenses={filteredExpense}/>
                <ExpenseList items={filteredExpense}/>
            </Card>
        </div>
    );
};

export default Expenses;
