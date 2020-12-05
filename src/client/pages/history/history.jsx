import React from "react";
import "../../styles/pages/history.scss";
import TransactionsItem from "../../components/history/transactionsItem";
import BillsItem from "../../components/history/billsItem";
import {
  transactionsItemsToday,
  transactionsItemsYesterday,
  transactionsItemsDaysAgo,
  billsItems,
  billsItemsMore,
} from "../../config/data.config";

export default function History() {
  const transactionsItemsTodayData = transactionsItemsToday.map((element) => (
    <TransactionsItem
      title={element.title}
      sum={element.sum}
      image={element.image}
    />
  ));
  const transactionsItemsYesterdayData = transactionsItemsYesterday.map(
    (element) => (
      <TransactionsItem
        title={element.title}
        sum={element.sum}
        image={element.image}
      />
    )
  );
  const transactionsItemsDaysAgoData = transactionsItemsDaysAgo.map(
    (element) => (
      <TransactionsItem
        title={element.title}
        sum={element.sum}
        image={element.image}
      />
    )
  );

  const billsItemData = billsItems.map((element) => (
    <BillsItem
      title={element.title}
      price={element.price}
      image={element.image}
      date={element.date}
    />
  ));
  const billsItemMoreData = billsItemsMore.map((element) => (
    <BillsItem
      title={element.title}
      price={element.price}
      image={element.image}
      date={element.date}
    />
  ));

  return (
    <div className="history">
      <div className="history__transactions">
        <h4>Transactions</h4>
        <section className="history__transactions-items">
          <div className="history__transactions-items-today">
            <label className="history__transactions-date">Today</label>
            {transactionsItemsTodayData}
          </div>
          <div className="history__transactions-items-yesterday">
            <div className="history__transactions-date">Yesterday</div>
            {transactionsItemsYesterdayData}
          </div>
          <div className="history__transactions-items-days-ago">
            <div className="history__transactions-date">2 days ago</div>
            {transactionsItemsDaysAgoData}
          </div>
        </section>
      </div>

      <div className="history__bills">
        <h4>Bills</h4>
        <section className="history__bills-items">
          <div className="history__bills-items-con">
            <label className="history__bills-items-date">December</label>
            {billsItemData}
          </div>
          <div className="history__bills-items-con">
            <label className="history__bills-items-date">November</label>
            <div className="scroll-con">{billsItemMoreData}</div>
          </div>
          <div className="history__bills-items-con">
            <label className="history__bills-items-date">October</label>
            {billsItemData}
          </div>
        </section>
      </div>
    </div>
  );
}