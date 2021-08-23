import React, { useState } from "react";

import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";
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
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
