import React from 'react';

import "./ExpenseDate.css"

const ExpenseDate = ({date}) => {
  const month = date.toLocaleString("ru-RU", { month: "short" });
  const day = date.toLocaleString("ru-RU", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export { ExpenseDate };
