import React, { useContext, useState } from 'react';
// import { TextField } from '@material-ui/core';
import '../../styles/components/register.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import UserContext from '../../context';

// templates
import Register from './register';

const BecomeClient = (props) => {
    const userService = useContext(UserContext);
    // console.log(userService)

    const [username, setUsername] = useState('');//anna
    const [email, setEmail] = useState('');//anna@gmail.com
    const [password, setPassword] = useState('');//12345678
    const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
    const role = 'user';

    const handleUsername = e => {
        setUsername(e.target.value);
    };

    const handleEmail = e => {
        setEmail(e.target.value)
    };

    const handlePassword = e => {
        setPassword(e.target.value)
    };

    const createUser = async () => {
        if (!username || !password || !password) {
            console.log('email or password undefined');
            return;
        }

        const userData = {
            username: username,
            email: email,
            password: password,
            roles: [role]
        };

        const response = await userService.signup(userData);
        console.log(response);

        setSubmittedSuccessfully(true);
    };

    if (submittedSuccessfully) return (
        <div>
            <h1>You were successfully submitted to banking.</h1>
            <Register />
        </div>
    );

    return (
        // <section>
        //     <h4>Створити клієнта</h4>
        //     <form>
        //         <label htmlFor="">
        //             Як до вас звертатись?
        //             <TextField value={username} onChange={handleUsername} />
        //         </label>
        //         <label htmlFor="">
        //             Вкажіть електронну адресу
        //             <TextField value={email} onChange={handleEmail} />
        //         </label>
        //         <label htmlFor="">
        //             Пароль
        //             <TextField value={password} type={password} onChange={handlePassword} />
        //         </label>
        //         <button type="button" onClick={createUser}>Далі</button>
        //     </form>
        // </section>

        <div className="RegisterCon">
            <div className="RegisterForm">
                <div className="RegisterFormHeader">
                    <div className="RegisterIconCon">
                        {/* <FontAwesomeIcon icon={faUserPlus} className="RegisterIcon" /> */}
                        <div>Register</div>
                    </div>
                </div>

                <form className="RegisterInputCon" >
                    <div className="RegisterNameCon">
                        <div>Name</div>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="RegisterNameInp"
                            value={username}
                            onChange={handleUsername} />
                    </div>

                    <div className="RegisterEmailCon">
                        <div>Email</div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="RegisterEmailInp"
                            value={email}
                            onChange={handleEmail} />
                    </div>

                    <div className="RegisterPasswordCon">
                        <div>Password</div>
                        <input
                            type="password"
                            placeholder="Create Password"
                            className="RegisterPasswordInp"
                            value={password}
                            type={password}
                            onChange={handlePassword} />
                    </div>

                    <div className="RegisterRegBtnCon">
                        <button type="button" onClick={createUser}>Register</button>
                    </div>
                </form>

                <div className="RegisterQuestionCon">
                    Have an account? <Link to="login" className="LoginLink">Login</Link>
                </div>
            </div>
        </div>


    );
};

export default BecomeClient;
