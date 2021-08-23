import React, { useState } from "react";

import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ amount, date, ...props }) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <li>
      <Card className={"expense-item"}>
        <ExpenseDate date={date} />
        <div className={"expense-item__description"}>
          <h2>{title}</h2>
          <div className={"expense-item__price"}>${amount}</div>
        </div>
        <button onClick={clickHandler}>Click me!</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
