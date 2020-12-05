import React, { useState } from "react";
import "../../../styles/components/home/upcomingBills.scss";

export default function UpcomingBills(props) {
  const date = new Date();
  const currentDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const getNextDate = () => {
    const today = new Date(selectedDate);
    const currentMonth = new Date(selectedDate).getMonth();
    const nextDate = new Date(
      today.getFullYear(),
      currentMonth + 1,
      today.getDate()
    );
    const date = nextDate || new Date();
    setSelectedDate(
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };
  return (
    <li className="bills">
      <div className="bills__left">
        <div className="bills__img-con">
          <img src={require(`../../../../img/${props.image}`)} alt="" />
        </div>
        <div className="bills__left-info">
          <p>{props.title}</p>
          <span className="bills__date">{selectedDate}</span>
        </div>
      </div>
      <div className="bills__right">
        ${props.price}
        <button onClick={getNextDate}>Pay</button>
      </div>
    </li>
  );
}
