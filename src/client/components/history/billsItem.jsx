import React from "react";
import "../../styles/components/history/billsItem.scss";

export default function BillsItem(props) {
  return (
    <li className="bills__item">
      <div className="bills__item-left">
      <div className="bills__img-con">
        <img src={require(`../../../img/${props.image}`)} alt="" />
      </div>
        <div className="bills__item-title-date">
          {props.title}
          <p>{props.date}</p>
        </div>
      </div>
      <p>- ${props.price}</p>
    </li>
  );
}
