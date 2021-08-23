import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul classNmae="expenses-list">
      {
        (items.map((ex) => {
          return (
            <ExpenseItem
              key={ex.id}
              title={ex.title}
              amount={ex.amount}
              date={ex.date}
            />
          );
        }))
      }
    </ul>
  );
};
