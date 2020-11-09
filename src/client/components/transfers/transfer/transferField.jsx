import React from 'react';
import '../../../styles/components/transfer/transferField.scss'
import { faCreditCard, faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TransferField() {
    const handleChange = () => {
        console.log('1111')
    }
    return (
        <div className="Transfer-Field">
            <header>Transfer</header>
            <p className="Input-Header">From</p>
            <form className="Input-Form">
                <input type="text"/>
            </form>

            <p className="Input-Header">To</p>
            <form className="Input-Form">
                <input type="text"/>
            </form>

            <form className="Input-Form">
                <input type="text" className="Ammount-Input" />
            </form>

            <div className="Button-Con" onClick={handleChange}>
                <p>the commission will be calculated automatically</p>
                <button>Transfer money</button>
            </div>

            <div className="From-Card-Con">
                <div className="Icon-Con">
                    <FontAwesomeIcon icon={faCreditCard} className="Card-Icon" />
                </div>
                <p>From card to card</p>
            </div>

            <div className="Swift-Transfers-Con">
                <div className="Icon-Con">
                    <FontAwesomeIcon icon={faMoneyCheckAlt} className="Card-Icon" />
                </div>
                <p>SWIFT transfers</p>
            </div>
        </div>
    )
}