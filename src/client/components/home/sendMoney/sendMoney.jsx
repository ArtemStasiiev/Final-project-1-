import React from "react";
import "../../../styles/components/home/sendMoney.scss";
import SendMoneyPhotos from "./sendMoneyItems/sendMoneyPhotos";
import RecentOperations from "./recentOperations/recentOperations";
import { sendMoneyPhotos, recentOperations } from "../../../config/data.config";

export default function SendMoney() {
  const sendMoneyPhoto = sendMoneyPhotos.map((element) => (
    <SendMoneyPhotos photo={element.image} />
  ));

  const recentOperationsData = recentOperations.map((element) => (
    <RecentOperations
      title={element.title} 
      price={element.price}
      image={element.image}
    />
  ));

  return (
    <section className="send-money">
      <h4>Send money</h4>
      <div className="send-money__inner">
        <label className="send-money__recent">Recent</label>
        <div className="contacts-con">
          <button className="plus-btn">+</button>
          <div className="img-con">{sendMoneyPhoto}</div>
        </div>
        <h4>Recent operations</h4>
        <label className="recent-operations__today">Today</label>
        {recentOperationsData}
      </div>
    </section>
  );
}