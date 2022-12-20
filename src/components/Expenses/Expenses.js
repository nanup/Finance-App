import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterExpenses = (expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    }

    const filteredExpenses = props.expenses.filter(filterExpenses);

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </li>
    )
}

export default Expenses;