import React, { useState } from 'react';
import '../../../../styles/components/payments/traveling.scss';
import CurrencyFormat from 'react-currency-format';

// class Traveling extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             travelAgency: '',
//             sum: 0
//         }
//     }

//     handleTravelAgencyChange = (event) => {
//         this.setState({travelAgency: event.target.value})
//     }

//     handleSumChange = (event) => {
//         this.setState({sum: event.target.value})
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//     }

//     render() {
//         console.log(this.state.travelAgency)
//         return(
//             <form onSubmit={() => this.handleSubmit}>
//                 <div className="Traveling__Top-Con">
//                     <select name="" id="Traveling__Select" onChange={this.handleTravelAgencyChange}>
//                         <option value="TravelAgency1">TravelAgency1</option>
//                         <option value="TravelAgency2">TravelAgency2</option>
//                         <option value="TravelAgency3">TravelAgency3</option>
//                         <option value="TravelAgency4">TravelAgency4</option>
//                         <option value="TravelAgency5">TravelAgency5</option>
//                     </select>

//                     {/* <input type="text" placeholder="Sum" className="Traveling__Input" /> */}
//                     <CurrencyFormat thousandSeparator={true} prefix={'$'} placeholder="Sum" className="Traveling__Input" />
//                 </div>

//                 <div className="Traveling__Bottom-Con">
//                     <button type="submit" className="Traveling__Btn">Transfer money</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default Traveling;

export default function Travelin() {

    const [travelAgency, setTravelAgency] = useState('');
    const [sum, setSum] = useState(0)

    const handleTravelAgencyChange = (event) => {
        setTravelAgency(event.target.value)
    }

    const handleSumChange = (event) => {
        setSum(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const clearInputValues = () => {
        setTravelAgency('');
        setSum(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="Traveling__Top-Con">
                <select name="" id="Traveling__Select" value={travelAgency} onChange={handleTravelAgencyChange}>
                    <option value="TravelAgency1">TravelAgency1</option>
                    <option value="TravelAgency2">TravelAgency2</option>
                    <option value="TravelAgency3">TravelAgency3</option>
                    <option value="TravelAgency4">TravelAgency4</option>
                    <option value="TravelAgency5">TravelAgency5</option>
                </select>

                {/* <input type="text" placeholder="Sum" className="Traveling__Input" /> */}
                <CurrencyFormat
                    thousandSeparator={true}
                    prefix={'$'}
                    placeholder="Sum"
                    className="Traveling__Input"
                    value={sum}
                    onChange={handleSumChange} />
            </div>

            <div className="Traveling__Bottom-Con">
                <button type="submit" className="Traveling__Btn" onClick={clearInputValues} >Transfer money</button>
            </div>
        </form>
    )
}