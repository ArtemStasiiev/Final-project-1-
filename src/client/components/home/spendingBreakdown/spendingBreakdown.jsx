import React from 'react';
import '../../../styles/components/home/spendingBreakdown.scss';

// const spendingBreakdown = (props) => {
//     return (
//         <div className="Spending-Breakdown__Items">
//             <div className="Spending-Breakdown__Type">{props.title}</div>
//             <div className="Spending-Breakdown__Price">${props.ammount}</div>
//         </div>
//     );
// }

// export default spendingBreakdown;

export default function SpendingBreakdown(props) {
    return (
        <div className="Spending-Breakdown__Items">
            <div className="Spending-Breakdown__Type">{props.title}</div>
            <div className="Spending-Breakdown__Price">${props.ammount} 
            <div className="Spending-Breakdown__Line-Background"> 
                <div className="Spending-Breakdown__Line" style={{ width: `${props.lineWidth}` }}></div> 
            </div> 
            </div>
        </div>
    )
}