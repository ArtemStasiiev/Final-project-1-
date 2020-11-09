import React, {useContext, useEffect, useState} from 'react';
// import {useLocation} from "react-router-dom";
import './styles/Root.scss'
import {Switch, Route, Link, useLocation} from 'react-router-dom';
// import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
// import {CreditCard, Home, EuroSymbol, EmojiPeople} from '@material-ui/icons';
import clientPrivate from './hoc/client-private';
import UserContext from './context';

// pages
// import WelcomePage from './pages/welcome';
import Navbar from './components/navbar/navbar';
import LoginPage from './components/login/login';
import RegisterPage from './components/register/register';
import HomePage from './pages/home/home';
import TransfersPage from './pages/transfers/transfers';
import SpendingPage from './pages/spending/spending'
import InvestingPage from './pages/investing/investing';
import HistoryPage from './pages/history/history';
import AccountPage from './pages/account';
import NotFoundPage from './pages/404';

const Root = () => {
    const userService = useContext(UserContext);

    const {pathname} = useLocation();
    const currentValueFromPath = pathname.split('/')[1];

    const [value, setValue] = useState(currentValueFromPath);
    const [userData, setUserData] = useState(null);


    const urls = ['/', '/transfers', '/spending', '/investing', '/history' ];

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    // const [userData, setUserData] = useState(null);

    useEffect(() => {
        userService.load();

        // userService.userChange.subscribe(async userData => {
        //     if (!userData) return;
        //     // setUserData(userData);
        // });

        const user = userService.getCurrentUser()
        if (user) {
            setUserData(user)
        }  
    }, []);
    console.log(pathname)

    // const encodeUri = encodeURIComponent(window.location.href);
    // const redirectUrl = `/signin?returnurl=${encodeUri}`;




    return (
        <div className="container">
            {/* <main> */}
            {   urls.includes(pathname) &&
                // <BottomNavigation value={value} onChange={handleChange}>
                //     <BottomNavigationAction component={Link} to="/" showLabel={true} label="Home" value="home"
                //                             icon={<Home/>}/>
                //     <BottomNavigationAction component={Link} to="/transfers" showLabel={true} label="Transfers"
                //                             value="transfers" icon={<CreditCard/>}/>
                //     <BottomNavigationAction component={Link} to="/currency-exchange" showLabel={true}
                //                             label="Currency Exchange" value="currency" icon={<EuroSymbol/>}/>
                //     <BottomNavigationAction component={Link} to="/account" showLabel={true} label="Account" value="nearby"
                //                             icon={<EmojiPeople/>}/>
                // </BottomNavigation>
                <Navbar /> 
                // <Navbar />
            }
            <div className="pagesCon">
                <Switch>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <Route path="/" exact component={clientPrivate(HomePage)}/>
                    <Route path="/transfers" exact component={clientPrivate(TransfersPage)}/>
                    <Route path="/spending" exact component={clientPrivate(SpendingPage)} />
                    <Route path="/investing" exact component={clientPrivate(InvestingPage)} />
                    <Route path="/history" exact component={clientPrivate(HistoryPage)} />
                    <Route path="/account" exact component={clientPrivate(AccountPage)}/>
                    <Route path="*" exact component={NotFoundPage}/>
                </Switch>
            {/* </main> */}
            </div>
        </div>
    );
};

// const RootWithService = (props) => (
//     <UserContext.Consumer>
//         {userService => <Root {...props} userService={userService} />}
//     </UserContext.Consumer>
// );

export default Root;
