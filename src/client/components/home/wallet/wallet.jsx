import React, { Component } from 'react';
import MasterCard from '../../../../img/mastercard.png'
import '../../../styles/components/home/wallet.scss'

const cardMoney = 16.234;

export default function Wallet() {
    return (
        <div className="Wallet-Con">
            <header>Wallet</header>
            <div className="Card-Con">
                <div className="Card">
                    <div className="Card-Content">
                    <div className="Card__Usd-Number">
                        USD
                    </div>
                    <div className="Card__Money-Con">
                        ${cardMoney.toFixed(3)}
                    </div>
                    <div className="Card__Number-Con">
                        <div className="Card__Number">**** 4439</div>
                        <img src={MasterCard} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}