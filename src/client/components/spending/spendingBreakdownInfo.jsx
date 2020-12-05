import React from "react";
import "../../styles/components/spending/spendingBreakdownInfo.scss";

export default function SpendingBreakdownInfo(props) {
  return (
    <li className="spending-breakdown__item">
      <div className="spending-breakdown__left">
        <div
          className="spending-breakdown__icon"
          style={{ backgroundColor: `${props.color}` }}
        >
          <img src={require(`../../../img/${props.icon}`)} alt="" />
        </div>
        <div className="spending-breakdown__name">
          {props.title}
          <div
            style={{
              backgroundColor: `${props.color}`,
              width: `${props.lineWidth}`,
            }}
          ></div>
        </div>
      </div>
      <p>
        {props.sum} <span>USD</span>{" "}
      </p>
    </li>
  );
}
