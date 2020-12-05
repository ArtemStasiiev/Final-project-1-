import React from "react";
import "../../../../styles/components/home/sendMoney.scss";

export default function RecentOperations(props) {
  return (
    <li className="recent-operations">
      <img src={require(`../../../../../img/${props.image}`)} alt="" />
      <div className="recent-operations__info">
        <p>{props.title}</p>
        <p>- ${props.price}</p>
      </div>
    </li>
  );
}
