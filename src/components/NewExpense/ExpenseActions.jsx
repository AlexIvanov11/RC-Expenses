import React from "react";

import "./ExpenseActions.css";

export const ExpenseActions = ({ opened, openForm, cancel }) => {
  if (!opened) {
    return (
      <div className="new-expense__actions__closed">
        <button type="button" onClick={openForm}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense__actions__opened">
      <button type="button" onClick={cancel}>
        Cancel
      </button>
      <button type="submit">Add expense</button>
    </div>
  );
};
