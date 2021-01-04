import React, { useContext, useEffect, useState } from "react";
import "./styles/components/variables/variables.scss";
import "./styles/root.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import clientPrivate from "./hoc/client-private";
import UserContext from "./context";

// pages
import Navbar from "./components/navbar/navbar";
import LoginPage from "./components/login/login";
import RegisterPage from "./components/register/register";
import HomePage from "./pages/home/home";
import TransfersPage from "./pages/transfers/transfers";
import SpendingPage from "./pages/spending/spending";
import InvestingPage from "./pages/investing/investing";
import HistoryPage from "./pages/history/history";
import NotFoundPage from "./pages/404";

const Root = () => {
  const userService = useContext(UserContext);
  const { pathname } = useLocation();
  const currentValueFromPath = pathname.split("/")[1];
  const [value, setValue] = useState(currentValueFromPath);
  const [userData, setUserData] = useState(null);
  const urls = ["/", "/transfers", "/spending", "/investing", "/history"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    userService.load();

    const user = userService.getCurrentUser();
    if (user) {
      setUserData(user);
    }
  }, []);
  
  return (
    <div className="container">
      {urls.includes(pathname) && <Navbar />}
      <div className="pages">
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/" exact component={clientPrivate(HomePage)} />
          <Route
            path="/transfers"
            exact
            component={clientPrivate(TransfersPage)}
          />
          <Route
            path="/spending"
            exact
            component={clientPrivate(SpendingPage)}
          />
          <Route
            path="/investing"
            exact
            component={clientPrivate(InvestingPage)}
          />
          <Route path="/history" exact component={clientPrivate(HistoryPage)} />
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
};

export default Root;