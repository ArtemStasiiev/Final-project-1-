import React from "react";
import "../../styles/components/history/transactionsItem.scss";

export default function TransactionsItem(props) {
  return (
    <li className="transactions__item">
      <div className="transactions__item-left">
        <img src={require(`../../../img/${props.image}`)} alt="" />
        <p>{props.title}</p>
      </div>
      {props.sum}
    </li>
  );
}
