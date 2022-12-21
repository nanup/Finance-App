import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart";
import { useState } from "react";

const App = () => {
    const expensesCopy = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expenses, setExpenses] = useState(expensesCopy);

    const addExpenseHandler = (expenseData) => {
        setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
    }

    const generateDataPoints = (expense) => {
        return {
            value: expense.amount,
            label: expense.date.toLocaleString("en-us", {month: "long"})
        };
    }

    const expensesDataPoints = expenses.map(generateDataPoints)

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Chart dataPoints={expensesDataPoints} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
