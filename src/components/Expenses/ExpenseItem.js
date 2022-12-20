import { useState } from "react";

import "./ExpenseItem.css";
import Date from "./Date";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!");
        console.log("Clicked!");
    }
    return (
        <Card className="expense-item">
            <Date date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title  </button>
        </Card>
    );
}

export default ExpenseItem;