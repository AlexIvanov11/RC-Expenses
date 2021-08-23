import React from "react";

import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = ({onAddExpense}) => {
    const onSave = (data) => {
        const expenseData ={
            ...data,
            id: Math.random().toString()
        };
        onAddExpense(expenseData)
    } 
  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSave}/>
    </div>
  );
};
