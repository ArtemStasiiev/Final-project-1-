import React from "react";
import "../../../styles/components/home/spendingBreakdown.scss";

export default function SpendingBreakdown(props) {
  return (
    <li className="spending-breakdown__items">
      <p className="spending-breakdown__type">{props.title}</p>
      <div className="spending-breakdown__price">
        ${props.ammount}
        <div className="spending-breakdown__line-background">
          <div
            className="spending-breakdown__line"
            style={{ width: `${props.lineWidth}` }}
          ></div>
        </div>
      </div>
    </li>
  );
}
