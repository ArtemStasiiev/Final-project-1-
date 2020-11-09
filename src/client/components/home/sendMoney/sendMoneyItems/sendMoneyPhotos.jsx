import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function sendMoneyPhotos(props) {
    return (
        <NavLink to="/transfers">
            <img className="Send-Money__Photos" src={require(`../../../../../img/${props.photo}.jpg`)} alt="" />
        </NavLink>
    )
}