import React from 'react';
import '../../styles/components/spending/spendingInfo.scss'

export default function SpendingInfo (props) {
        return (
            <div style={{ backgroundColor: `${props.color}`, width: `${props.width}`, height: '7px', borderRadius: '10px' }}></div>
        );
}