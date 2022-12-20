import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const submitFormHandler = (expenseData) => {
        const formData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(formData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitForm={submitFormHandler}/>
        </div>
    )
}

export default NewExpense;