import React, { useContext, useState } from "react";
import "../../styles/components/register.scss";
import { Link } from "react-router-dom";
import UserContext from "../../context";
import Register from "./register";

const BecomeClient = (props) => {
  const userService = useContext(UserContext);
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const role = "user";

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const createUser = async () => {
    if (!username || !password || !password) {
      console.log("email or password undefined");
      return;
    }
    const userData = {
      username: username,
      email: email,
      password: password,
      roles: [role],
    };
    const response = await userService.signup(userData);
    console.log(response);
    setSubmittedSuccessfully(true);
  };
  if (submittedSuccessfully)
    return (
      <div>
        <h1>You were successfully submitted to banking.</h1>
        <Register />
      </div>
    );

  return (
    <div className="register">
      <div className="register__form">
        <div className="register__form-header">Register</div>

        <form className="register__input-form">
          <div className="register__name">
            <div>Name</div>
            <input
              type="text"
              placeholder="Enter Name"
              className="register__name-input"
              value={username}
              onChange={handleUsername}
            />
          </div>

          <div className="register__email">
            <div>Email</div>
            <input
              type="email"
              placeholder="Enter Email"
              className="register__email-input"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="register__password">
            <div>Password</div>
            <input
              type="password"
              placeholder="Create Password"
              className="register__password-input"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="register__btn-con">
            <button type="button" onClick={createUser}>
              Register
            </button>
          </div>
        </form>
        <div className="register__question">
          Have an account?{" "}
          <Link to="login" className="register__login-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BecomeClient;
