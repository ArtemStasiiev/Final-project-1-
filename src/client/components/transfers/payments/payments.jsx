import React from "react";
import "../../../styles/components/transfer/payments.scss";
import PaymentItems from "./paymentItems/paymentItems";
import { paymentItems } from "../../../config/data.config";

export default function Payments() {
  const paymentItemsData = paymentItems.map((element) => (
    <PaymentItems icon={element.icon} name={element.name} />
  ));
  return (
    <section className="payments">
      <h4>Payments</h4>
      <ul className="payments__items">
        <li className="payments__item-con">{paymentItemsData}</li>
      </ul>
    </section>
  );
}