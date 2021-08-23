import React from "react";

import "./ExpensesFilter.css";

export const ExpensesFilter = ({ year, selectYear }) => {
  const options = ["2021", "2022", "2023", "2024", "2025"];
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={selectYear}>
          {options.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
