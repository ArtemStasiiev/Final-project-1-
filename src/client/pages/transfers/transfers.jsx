// import React, { useContext } from 'react';
import React from 'react';
// import UserContext from '../../context';

import '../../styles/pages/transfers.scss';
// import Payments from '../../components/transfers/payments/payments'
// import Wallet from '../../components/home/wallet/wallet';
import SendMoney from '../../components/transfers/sendMoney/sendMoney';
import TransferField from '../../components/transfers/transfer/transferField';
import Payments from '../../components/transfers/payments/payments'
// const TransfersPage = () => {
//     const userService = useContext(UserContext);
//     console.log('TransfersPage', userService);
//     return (
//         <div className="Transfer">
//             <div className="Transfer__Left-Con">
//                 <Payments />
//             </div>
//             <div className="Transfer__Right-Con">
//                 <Wallet cardMoney={this.state.cardMoney} className="Wallet" />
//             </div>
//         </div>
//     );
// };

// export default TransfersPage;

// class Transfer extends Component {
//     state = {
//         cardMoney: 16.234
//     }
//     render() {
//         return (
//             <div className="Transfer">
//                 <div className="Transfer__Left-Con">
//                     <Payments />
//                 </div>
//                 <div className="Transfer__Right-Con">
//                     <Wallet cardMoney={this.state.cardMoney} className="Wallet" />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Transfer;

export default function Transfer() {

    // const cardMoney = 16.234

    return (
        <div className="Transfer">
            <div className="Transfer__Left-Con">
                {/* <Payments /> */}
                <SendMoney />
            </div>
            <div className="Transfer__Center-Con">
                <TransferField />
            </div>
            <div className="Transfer__Right-Con">
                {/* <Wallet cardMoney={cardMoney} className="Wallet" /> */}
                <Payments />
            </div>
        </div>
    )
}