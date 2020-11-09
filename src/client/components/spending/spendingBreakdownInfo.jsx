import React from 'react';
import '../../styles/components/spending/spendingBreakdownInfo.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SpendingBreakdownInfo (props) {
    return (
        <div className="Spending-Breakdown-Info__Item">
            <div className="Spending-Breakdown-Info__Name">
                <div className="Spending-Breakdown-Info__Icon-Con">
                    <div style={{ backgroundColor: `${props.color}`, color: 'rgb(20, 20, 22)' }}>
                        <FontAwesomeIcon icon={props.icon} />
                    </div>
                </div>
                <div className="Spending-Breakdown-Info__Item-Name">
                    {props.title}
                    <div style={{ backgroundColor: `${props.color}`, width: `${props.lineWidth}`, height: '7px', borderRadius: '10px' }}></div>
                </div>
            </div>

            <div className="Spending-Breakdown-Info__Item-Price">{props.sum} <span>USD</span> </div>
        </div>
    );
}

