import React from "react";
import "../../styles/pages/home.scss";
import Wallet from "../../components/home/wallet/wallet";
import SendMoney from "../../components/home/sendMoney/sendMoney";
import UpcomingBills from "../../components/home/upcomingBills/upcomingBills";
import SpendingBreakdown from "../../components/home/spendingBreakdown/spendingBreakdown";
import SafeToSpend from "../../components/home/safeToSpend/safeToSpend";
import ExpenseIncomeChart from "../../components/home/expenseIncomeChart/expenseIncomeChart";
import MyGoals from "../../components/home/myGoals/myGoals";
import {
  cardMoney,
  upcomingBills,
  spendingBreakdown,
  monthNames,
  masterCard,
  visaLogo,
  masterCardLogo,
} from "../../config/data.config";

export default function Home() {
  const upcomingBillsData = upcomingBills.map((element) => (
    <UpcomingBills
      title={element.title}
      price={element.price}
      image={element.image}
      id={element.id}
      date={element.date}
    />
  ));

  const spendingBreakdownData = spendingBreakdown.map((element) => (
    <SpendingBreakdown
      title={element.title}
      lineWidth={element.lineWidth}
      ammount={element.sum}
    />
  ));

  return (
    <div className="home">
      <div className="home__left">
        <Wallet 
          cardMoney={cardMoney} 
          masterCard={masterCard} 
          visaLogo={visaLogo} 
          masterCardLogo={masterCardLogo} />
        <SendMoney />
      </div>

      <div className="home__center">
        <SafeToSpend monthNames={monthNames} />
        <ExpenseIncomeChart />
        <MyGoals />
      </div>

      <div className="home__right">
        <section className="home__upcoming-bills">
          <h4>Upcoming Bills</h4>
          <label className="home__upcoming-bills-month">
            {monthNames[new Date().getMonth()]}
          </label>
          {upcomingBillsData}
          <h4> </h4>
          <label className="home__upcoming-bills-month">
            {monthNames[new Date().getMonth() + 1 ]}
          </label>
          {upcomingBillsData}
        </section>
        <section className="home__spending-breakdown">
          <h4>Spending breakdown</h4>
          {spendingBreakdownData}
        </section>
      </div>
    </div>
  );
}