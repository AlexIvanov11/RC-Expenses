import React, { useState } from "react";

import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2021");

  const selectYear = (event) => {
    setYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} selectYear={selectYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
