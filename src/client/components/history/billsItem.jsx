import React,{Component} from 'react';
import '../../styles/components/history/billsItem.scss'

// class BillsItem extends Component {
//     render() {
//         return(
//             <div className="BillsItem">
//                 <div className="BillsItem__Left-Con">
//                     {props.title}
//                 </div>

//                 <div className="BillsItem__Right-Con">
//                     ${props.price}
//                 </div>
//             </div>
//         )
//     }
// }

// export default BillsItem

export default function BillsItem(props) {
    return (
        <div className="BillsItem">
            <div className="BillsItem__Left-Con">
                <img src={require(`../../../img/${props.image}`)} alt=""/>
                <div className="BillsItem__Title-Date">
                    {props.title}
                    <div className="Date-Con">{props.date}</div>
                </div>
            </div>

            <div className="BillsItem__Right-Con">
                - ${props.price}
            </div>
        </div>
    )
}