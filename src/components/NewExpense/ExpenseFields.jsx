import React from "react";

import "./ExpenseFields.css";

export const ExpenseFields = ({
  title,
  amount,
  date,
  titleChangeHandler,
  amountChangeHandler,
  dateChangeHandler,
}) => {
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={title} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
          value={amount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2021-01-01"
          max="2025-12-31"
          onChange={dateChangeHandler}
          value={date}
        />
      </div>
    </div>
  );
};
