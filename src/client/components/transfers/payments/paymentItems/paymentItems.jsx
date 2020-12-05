import React from "react";
import "../../../../styles/components/transfer/payments.scss";

export default function PaymentItems(props) {
  return (
      <div className="payments__item">
        <div className="payments__icon-con">
          <img
            src={require(`../../../../../img/${props.icon}`)}
            alt=""
          />
        </div>
        <p>{props.name}</p>
      </div>
  );
}
