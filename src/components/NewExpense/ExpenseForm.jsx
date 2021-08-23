import React, { useState } from "react";

import "./ExpenseForm.css";
import { ExpenseFields } from "./ExpenseFields";
import { ExpenseActions } from "./ExpenseActions";

export const ExpenseForm = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [opened, setOpened] = useState(false);

  const openForm = () => {
    setOpened(true);
  };

  const cancel = () => {
    setTitle("");
    setDate("");
    setAmount("");
    setOpened(false);
  };

  // This is how course went, but i prefer to use key-value approach, when you have one handler
  // Or, as it is called in more traditional way (according to tutor), merged state where we use on object for a bunch of states
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    onSave(expenseData);
    // this is why i prefer merged state, because you can define it as a constant
    setTitle("");
    setDate("");
    setAmount("");
    setOpened(false);
  };

  return (
    <form onSubmit={submitHandler}>
      {opened && (
        <ExpenseFields
          title={title}
          amount={amount}
          date={date}
          amountChangeHandler={amountChangeHandler}
          titleChangeHandler={titleChangeHandler}
          dateChangeHandler={dateChangeHandler}
        />
      )}
      <ExpenseActions opened={opened} openForm={openForm} cancel={cancel} />
    </form>
  );
};
