import React from "react";
import "../../styles/components/navbar.scss";
import AccountPhoto from "../../../img/face-photo(17).jfif";
import { NavLink } from "react-router-dom";
import Paypal from '../../../img/paypal.svg';
import HistoryClock from '../../../img/history-clock.svg';
import LineChart from '../../../img/line-chart.svg';
import PieChart from '../../../img/pie-chart.svg';
import Transfer from '../../../img/transfer.svg';
import Home from '../../../img/home.svg';
import Settings from '../../../img/gear-option.svg';
import Notification from '../../../img/notification.svg';

const navbar = () => (
  <div className="navbar-con">
    <nav className="navbar">
      <NavLink exact to="/" className="paypal__icon">
        <img src={Paypal} alt="" style={{ width: '100px'}}/>
      </NavLink>
      <div className="navbar__items">
        <NavLink
          exact
          to="/"
          className="navbar__item"
          activeClassName="main-nav-active"
          style={{ textDecoration: "none" }}
        >
          <div className="navbar__items-icon">
            <img src={Home} alt="" />
          </div>
          
          <div className="navbar__items-name">Home</div>
        </NavLink>
        <NavLink
          exact
          to="/transfers"
          className="navbar__item"
          activeClassName="main-nav-active"
          style={{ textDecoration: "none" }}
        >
          <div className="navbar__items-icon">
            <img src={Transfer} alt="" />
          </div>

          <div className="navbar__items-name">Transfer</div>
        </NavLink>
        <NavLink
          exact
          to="/spending"
          className="navbar__item"
          activeClassName="main-nav-active"
          style={{ textDecoration: "none" }}
        >
          <div className="navbar__items-icon">
            <img src={PieChart} alt="" />
          </div>

          <div className="navbar__items-name">Spending</div>
        </NavLink>
        <NavLink
          exact
          to="/investing"
          className="navbar__item"
          activeClassName="main-nav-active"
          style={{ textDecoration: "none" }}
        >
          <div className="navbar__items-icon">
            <img src={LineChart} alt="" />
          </div>
          <div className="navbar__items-name">Investing</div>
        </NavLink>
        <NavLink
          exact
          to="/history"
          className="navbar__item"
          activeClassName="main-nav-active"
          style={{ textDecoration: "none" }}
        >
          <div className="navbar__items-icon">
            <img src={HistoryClock} alt="" />
          </div>

          <div className="navbar__items-name">History</div>
        </NavLink>
      </div>
      <div className="navbar__settings">
        <NavLink exact to="/history">
          <img src={Notification} alt=""/>
        </NavLink>
        <img src={Settings} alt=""/>
        <img src={AccountPhoto} alt="" />
      </div>
    </nav>
  </div>
);

export default navbar;
