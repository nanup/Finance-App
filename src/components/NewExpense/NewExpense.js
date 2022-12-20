import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const submitFormHandler = (formData) => {
        props.onAddExpense(formData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitForm={submitFormHandler}/>
        </div>
    )
}

export default NewExpense;