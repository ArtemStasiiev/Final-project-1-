// import React, { Component } from 'react';
import React, { useState } from 'react';
import '../../../styles/components/home/sendMoney.scss';
import NumberFormat from 'react-number-format';
import SendMoneyPhotos from './sendMoneyItems/sendMoneyPhotos';
import RecentOperations from './recentOperations/recentOperations';
// import photo from '../../../../img/face-photo(1).jpg'

import {sendMoneyPhotos, recentOperations} from '../../../config/data.config'

export default function SendMoney(props) {
    // console.log(props)
    const [cardNumber, setCardNumber] = useState('');
    const [sum, setSum] = useState(0);

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    }

    const handleSumChange = (event) => {
        setSum(event.target.value);
    }

    // function handleSubmit (event) {
    //     event.preventDefault();
    // }

    const clearInputValues = (event) => {
        setCardNumber('');
        setSum(0);
    }

    const sendMoneyPhoto = sendMoneyPhotos.map(element => 
        <SendMoneyPhotos 
        photo={element.image} />);
    
    const recentOperationsData = recentOperations.map(element =>
        <RecentOperations 
            title={element.title}
            price={element.price}
            image={element.image}/>
        )

    return (
        <div className="Send-Money">
            <header>Send money</header>

            <form className="Send-Money__Form">
                <div className="Send-Money__Recent">Recent</div>
                <div className="contacts-con">
                    <button className="plus-btn">+</button>
                    <div className="img-con">
                        {sendMoneyPhoto}
                    </div>
                </div>
                <div className="Recent-Operations__Con">
                    <header>Recent operations</header>
                    <div className="Recent-Operations__Today">Today</div>
                        <div className="Recent-Operations__Items-Con">
                            {recentOperationsData}
                        </div>
                </div>
                {/* <div className="Send-Money__Inp-Con">
                    <NumberFormat
                        type="text"
                        name="cardNumber"
                        format="#### #### #### ####"
                        mask=" "
                        autoComplete="off"
                        required
                        onChange={handleCardNumberChange}
                        value={cardNumber}
                        className="sendMoney-input" />

                    <NumberFormat
                        type="text" name="cardNumber"
                        thousandSeparator={true}
                        prefix={'$'}
                        autoComplete="off"
                        required
                        onChange={handleSumChange}
                        value={sum}
                        className="sendMoney-input" />
                </div>
                <div className="Send-Money__Button-Con">
                    <button type="button" className="Send-Money__Button" onClick={clearInputValues} disabled={!sum.length || cardNumber.length > 19}>Send</button>
                </div> */}
                
            </form>

        </div>
    )
}