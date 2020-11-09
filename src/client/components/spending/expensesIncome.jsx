import React from 'react';
import '../../styles/components/spending/expensesIncome.scss'

export default function ExpensesIncomes(props) {
    return (
        <div className="Expenses-Income">
            <div className="Expenses">
                <header>Expenses</header>

                <div className="Expenses__Sum">
                    {props.expenses} <span>USD</span>
                </div>
            </div>

            <div className="Income">
                <header>Income</header>

                <div className="Income__Sum">
                    {props.income} <span>USD</span>
                </div>
            </div>
        </div>
    );
};

