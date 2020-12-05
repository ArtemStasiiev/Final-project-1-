import React from "react";
import "../../../styles/components/home/safeToSpend.scss";

export default function SafeToSpend(props) {
  return (
    <section className="safe-to-spend">
      <h4>Safe to spend</h4>
      <div className="safe-to-spend__border">
        <div className="safe-to-spend__content">
          <span className="safe-to-spend__ammount">$1,043.06</span>
          <label className="safe-to-spend__date">
            Until {props.monthNames[new Date().getMonth() ]}, 31
          </label>
        </div>
      </div>
    </section>
  );
}
