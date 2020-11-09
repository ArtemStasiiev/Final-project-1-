import React from 'react';
import '../../../../styles/components/transfer/payments.scss'

export default function PaymentItems(props) {
    return (
    <div className="Payments-Item">
        <div className="Payments-Icon-Con">
            <img src={require(`../../../../../img/${props.icon}`)} alt="" style={{ height: '25px', width: '25px' }} />
        </div>

        <p>{props.name}</p>
    </div>
    )

}