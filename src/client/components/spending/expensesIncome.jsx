import React from "react";
import "../../styles/components/spending/expensesIncome.scss";

export default function ExpensesIncomes(props) {
  return (
    <section className="expenses-income">
      <div className="expenses">
        <h4>Expenses</h4>
        <p className="expenses__sum">
          {props.expenses} <span>USD</span>
        </p>
      </div>
      <div className="income">
        <h4>Income</h4>
        <p className="income__sum">
          {props.income} <span>USD</span>
        </p>
      </div>
    </section>
  );
}
