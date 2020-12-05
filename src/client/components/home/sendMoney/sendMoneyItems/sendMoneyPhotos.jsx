import React from "react";
import { NavLink } from "react-router-dom";

export default function sendMoneyPhotos(props) {
  return (
    <NavLink to="/transfers">
      <img
        className="send-money__photos"
        src={require(`../../../../../img/${props.photo}.jpg`)}
        alt=""
      />
    </NavLink>
  );
}
