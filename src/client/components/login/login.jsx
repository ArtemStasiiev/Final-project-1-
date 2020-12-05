import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/login.scss";
import UserContext from "../../context";

const Signin = () => {
  const userService = useContext(UserContext);
  // let redirectTimeout;

  const [username, setUsername] = useState(""); //anna
  const [password, setPassword] = useState(""); //12345678
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = userService.getCurrentUser();
    if (user) {
      setUserData(user);
    }
    console.log(user);
  }, []);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // useEffect(() => () => { clearTimeout(redirectTimeout) });

  const loginUser = async () => {
    if (!username || !password || !password) {
      console.log("email or password undefined");
      return;
    }

    const userData = {
      username: username,
      password: password,
    };

    const response = await userService.signin(userData);
    console.log(response);
    setUserData(userData);
  };

  if (userData)
    return (
      <div style={{ textAlign: "center", color: "rgb(225, 225, 227)" }}>
        <h1>Welcome to banking {userData.username}.</h1>
        <p style={{ color: "rgb(225, 225, 227)", fontSize: "20px" }}>
          Go to{" "}
          <Link to="/" style={{ color: "rgb(225, 225, 227)" }}>
            home page
          </Link>
        </p>
      </div>
    );
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__form-header">Login</div>

        <form className="login__input-form">
          <div className="login__name">
            <div>Name</div>
            <input
              type="text"
              placeholder="Enter your name"
              className="login__name-input"
              value={username}
              onChange={handleUsername}
            />
          </div>

          <div className="login__password">
            <div>Password</div>
            <input
              type="password"
              placeholder="Enter Password"
              className="login__password-input"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="login__btn-con">
            <button type="button" onClick={loginUser}>
              Login
            </button>
          </div>
        </form>

        <div className="login__question">
          No account?{" "}
          <Link to="/register" className="login__register-link">
            {" "}
            Register{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
