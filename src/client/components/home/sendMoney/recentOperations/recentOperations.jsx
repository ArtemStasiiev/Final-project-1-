import React from 'react';

import '../../../../styles/components/home/sendMoney.scss'

export default function RecentOperations(props) {
    return (
        <div className="Recent-Operations">
            <div className="Recent-Operations__Left-Con">
                <img src={require(`../../../../../img/${props.image}`)} alt=""/>
            </div>
            <div className="Recent-Operations__Right-Con">
                <p>{props.title}</p> 
                <p>- ${props.price}</p>
            </div>
        </div>
    )
}