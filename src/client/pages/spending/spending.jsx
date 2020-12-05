import React from "react";
import "../../styles/pages/spending.scss";
import SpendingInfo from "../../components/spending/spendingInfo";
import SpendingBreakdownInfo from "../../components/spending/spendingBreakdownInfo";
import ExpensesIncome from "../../components/spending/expensesIncome";
import ExpenseChart from "../../components/spending/expenseChart";
import {
  spending,
  expenses,
  income,
  spendingBreakdownInfo,
  spendingInfo
} from "../../config/data.config";

export default function Spending() {
  const spendingBreakdownData = spendingBreakdownInfo.map((element) => (
    <SpendingBreakdownInfo
      title={element.title}
      sum={element.sum}
      icon={element.icon}
      color={element.color}
      lineWidth={element.lineWidth}
    />
  ));
  const spendingInfoData = spendingInfo.map((element) => (
    <SpendingInfo color={element.color} width={element.width} />
  ));

  return (
    <div className="spending">
      <section className="spending__left">
        <div className="spending__info">
          <h4>Spending</h4>
          <div className="spending__info-sum">
            {spending} <span>USD</span>
          </div>
          <div className="spending__info-lines">{spendingInfoData}</div>
        </div>
        <h4>Spending breakdown</h4>
        {spendingBreakdownData}
      </section>
      <section className="spending__right">
        <ExpensesIncome expenses={expenses} income={income} />
        <ExpenseChart />
      </section>
    </div>
  );
}
