import React, { Component } from 'react';
import '../../styles/pages/history.scss';
import TransactionsItem from '../../components/history/transactionsItem';
import BillsItem from '../../components/history/billsItem';

// class History extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             transactionsItems: [
//                 { title: '5367 7603 5710 9553', sum: 50 },
//                 { title: 'Rocket Espresso', sum: 10 },
//                 { title: '6804 7846 9752 2365', sum: 100 },
//                 { title: 'Rocket Espresso', sum: 10 },
//                 { title: '9025 8503 7501 8611', sum: 50 },
//                 { title: '5367 7603 5710 9553', sum: 50 },
//                 { title: 'Rocket Espresso', sum: 10 },
//                 { title: '6804 7846 9752 2365', sum: 100 },
//                 { title: 'Rocket Espresso', sum: 10 },
//                 { title: '9025 8503 7501 8611', sum: 50 }
//             ],
//             billsItems: [
//                 { title: 'Netflix', price: 12 },
//                 { title: 'Apple TV', price: 10 },
//                 { title: '+38 063 56 87 154', price: 5 },
//                 { title: 'Credit Agricole', price: 100 },
//             ]
//         }
//     }
//     render() {
//         const transactionsItem = this.state.transactionsItems.map(element =>
//             <TransactionsItem
//                 title={element.title}
//                 sum={element.sum} />);

//         const billsItem = this.state.billsItems.map(element =>
//             <BillsItem
//                 title={element.title}
//                 price={element.price} />)

//         return (
//             <div className="HistoryCon">
//                 <div className="TransactionsHistory">
//                     <header>Transactions</header>
//                     <div className="TransactionsHistory__Items">
//                         {transactionsItem}
//                     </div>
//                 </div>

//                 <div className="BillsHistory">
//                     <header>Bills</header>
//                     <div className="BillsHistory__Items">
//                         {billsItem}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default History;

import { transactionsItemsToday, transactionsItemsYesterday, transactionsItemsDaysAgo, billsItems, billsItemsMore } from '../../config/data.config'

export default function History() {

    // const transactionsItems = [
    //     { title: '5367 7603 5710 9553', sum: 50, image: require('../../../img/pb-logo.jpg') },
    //     { title: 'Rocket Espresso', sum: 10, image: require('../../../img/rocket-espresso.jpg') },
    //     { title: '6804 7846 9752 2365', sum: 100, image: require('../../../img/pumb-bank.png') },
    //     { title: 'Rocket Espresso', sum: 10, image: require('../../../img/rocket-espresso.jpg') },
    //     { title: '9025 8503 7501 8611', sum: 50, image: require('../../../img/monobank.jpg') },
    //     { title: '5367 7603 5710 9553', sum: 50, image: require('../../../img/pb-logo.jpg') },
    //     { title: 'Rocket Espresso', sum: 10, image: require('../../../img/rocket-espresso.jpg') },
    //     { title: '6804 7846 9752 2365', sum: 100, image: require('../../../img/pumb-bank.png') },
    //     // { title: 'Rocket Espresso', sum: 10, image: require('../../../img/rocket-espresso.jpg') },
    //     // { title: '9025 8503 7501 8611', sum: 50, image: require('../../../img/monobank.jpg') }
    // ];
    // const billsItems = [
    //     { title: 'Netflix', price: 12, image: require('../../../img/netflix-icon.jpg') },
    //     { title: 'Apple TV', price: 10, image: require('../../../img/apple-tv-icon.svg') },
    //     { title: '+38 063 56 87 154', price: 5, image: require('../../../img/lifecell-icon.jpg') },
    //     { title: 'Credit Agricole', price: 100, image: require('../../../img/logo-credit-agricole-big.gif') },
    // ];

    const transactionsItemsTodayData = transactionsItemsToday.map(element =>
        <TransactionsItem
            title={element.title}
            sum={element.sum}
            image={element.image} />);
    const transactionsItemsYesterdayData = transactionsItemsYesterday.map(element => 
        <TransactionsItem
            title={element.title}
            sum={element.sum}
            image={element.image} />);
    const transactionsItemsDaysAgoData = transactionsItemsDaysAgo.map(element => 
        <TransactionsItem
            title={element.title}
            sum={element.sum}
            image={element.image} />);

    const billsItemData = billsItems.map(element =>
        <BillsItem
            title={element.title}
            price={element.price}
            image={element.image}
            date={element.date} />);
    const billsItemMoreData = billsItemsMore.map(element => 
        <BillsItem
            title={element.title}
            price={element.price}
            image={element.image}
            date={element.date} />);

    return (
        <div className="HistoryCon">
            <div className="TransactionsHistory">
                <header>Transactions</header>
                <div className="TransactionsHistory__Items">
                    <div className="TransactionsHistory__Items-Today">
                        <div className="TransactionsHistory__Date-Con">Today</div>
                        {transactionsItemsTodayData}
                    </div>
                    <div className="TransactionsHistory__Items-Yesterday">
                        <div className="TransactionsHistory__Date-Con">Yesterday</div>
                        {transactionsItemsYesterdayData}
                    </div>
                    <div className="TransactionsHistory__Items-Days-Ago">
                        <div className="TransactionsHistory__Date-Con">2 days ago</div>
                        {transactionsItemsDaysAgoData}
                    </div>
                </div>
            </div>

            <div className="BillsHistory">
                <header>Bills</header>
                <div className="BillsHistory__Items">
                    <div className="BillsHistory__Items-Month-Con">
                        <div className="BillsHistory__Items-Date-Con">December</div>
                        {billsItemData}
                    </div>
                    <div className="BillsHistory__Items-Month-Con">
                        <div className="BillsHistory__Items-Date-Con">November</div>
                            <div className="scroll-con">
                                {billsItemMoreData}
                            </div>
                    </div>
                    <div className="BillsHistory__Items-Month-Con">
                        <div className="BillsHistory__Items-Date-Con">October</div>
                        {billsItemData}
                    </div>
                </div>
            </div>
        </div>
    )
}