import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
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

    const generateExpense = (expense) => {
         return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.map(generateExpense)}
        </Card>
    )
}

export default Expenses;