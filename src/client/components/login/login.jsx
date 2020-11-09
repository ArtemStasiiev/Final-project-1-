import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/login.scss';
// import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import UserContext from '../../context';

const Signin = () => {
    const userService = useContext(UserContext);

    let redirectTimeout;
    // const [redirect, setRedirect] = useState(false);

    const [username, setUsername] = useState('');//anna
    const [password, setPassword] = useState('');//12345678
    // const [loggedinSuccessfully, setloggedinSuccessfully] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // userService.userChange.subscribe(async userData => {
        //     if (!userData) return;
        //     console.log('in subscr')
        //     setUserData(userData);
        // });
        const user = userService.getCurrentUser()
        if (user) {
            setUserData(user)
        }  
        console.log(user)
    }, []);

    const handleUsername = e => { setUsername(e.target.value) };
    const handlePassword = e => { setPassword(e.target.value) };
    useEffect(() => () => { clearTimeout(redirectTimeout) });

    const loginUser = async () => {
        if (!username || !password || !password) {
            console.log('email or password undefined');
            return;
        }

        const userData = {
            username: username,
            password: password,
        }

        const response = await userService.signin(userData);
        console.log(response);
        setUserData(userData);
        // redirectTimeout = setTimeout(() => setRedirect(true), 5000);
        // setloggedinSuccessfully(true);
    }

    // if (redirect) return <Redirect to="/" />;
    if (userData) return (
        <div>
            <h1>Welcome to banking {userData.username}.</h1>
            <Link to="/">home</Link>
        </div>
    );
    return (
        <div className="LoginCon">
            <div className="LoginForm">
                <div className="LoginFormHeader">
                    <div className="LoginIconCon">
                        {/* <FontAwesomeIcon icon={faSignInAlt} className="LoginIcon" /> */}
                        <div>Login</div>
                    </div>
                </div>

                <form className="LoginInputCon">
                    <div className="LoginEmailCon">
                        <div>Name</div>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="LoginNameInp"
                            value={username} 
                            onChange={handleUsername} />
                    </div>

                    <div className="LoginPasswordCon">
                        <div>Password</div>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="LoginPasswordInp"
                            value={password} 
                            type={password} 
                            onChange={handlePassword} />
                    </div>

                    <div className="LoginLogBtnCon">
                        <button type="button" onClick={loginUser}>Login</button>
                    </div>
                </form>

                <div className="LoginQuestionCon">
                    No account? <Link to="/register" className="RegisterLink"> Register </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Signin;
