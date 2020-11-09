import React from 'react';
import '../../../styles/components/transfer/payments.scss'
import PaymentItems from './paymentItems/paymentItems';
import { paymentItems } from "../../../config/data.config";

export default function Payments() {
    const paymentItemsData = paymentItems.map(element =>
        <PaymentItems 
            icon={element.icon}
            name={element.name}/>)
    return (
        <div className="Payments">
            <header>Payments</header>

            <div className="Payments-Items-Con">
                {paymentItemsData}
            </div>
        </div>
    )
}