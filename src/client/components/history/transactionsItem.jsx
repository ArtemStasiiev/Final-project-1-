import React, { Component } from 'react';
import '../../styles/components/history/transactionsItem.scss';

// class TransactionsItem extends Component {

    // render() {
    //     return (
    //         <div className="TransactionsItem">
    //             <div className="TransactionsItem__Left-Con">
    //                 <img src="" alt=""/>
    //                 <div>
    //                     {this.props.title}
    //                 </div>
    //             </div>

    //             <div className="TransactionsItem__Right-Con">
    //                 ${this.props.sum}
    //             </div>
    //         </div>


    // <div className="Bills">
    // <div className="Bills__Left-Con">
    //     <img src={props.image} alt="" />

    //     <div className="Bills__Left-Con__Info">
    //         <div>{props.title}</div>
    //         <div className="BillsDate">{selectedDate}</div>
    //     </div>
    // </div>

    // <div className="Bills__Right-Con">
    //                     ${props.price}
    //     <button onClick={getNextDate}>Pay</button>
    // </div>
    // </div>
//         )
//     }
// }

// export default TransactionsItem

export default function TransactionsItem(props) {
    return (
        <div className="TransactionsItem">
            <div className="TransactionsItem__Left-Con">
                <img src={require(`../../../img/${props.image}`)} alt=""/>
                <div>
                    {props.title}
                </div>
            </div>

            <div className="TransactionsItem__Right-Con">
                {props.sum}
            </div>
        </div>
    )
}