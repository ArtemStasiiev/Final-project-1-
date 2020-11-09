// import React, { Component } from 'react';
import React, { useState } from 'react';
import '../../../../styles/components/payments/charity.scss';
import CurrencyFormat from 'react-currency-format';


// class Charity extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             charityOrganization: '',
//             sum: 0
//         }
//     }

//     handleCharityOrganizationChange = (event) => {
//         this.setState({ charityOrganization: event.target.value });
//     }

//     handleSumChange = (event) => {
//         this.setState({ sum: event.target.value });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="Charity__Top-Con">
//                     <select name="" id="Charity__Select" onChange={this.handleCharityOrganizationChange}>
//                         <option value="CharityOrganization1">CharityOrganization1</option>
//                         <option value="CharityOrganization2">CharityOrganization2</option>
//                         <option value="CharityOrganization3">CharityOrganization3</option>
//                         <option value="CharityOrganization4">CharityOrganization4</option>
//                         <option value="CharityOrganization5">CharityOrganization5</option>
//                     </select>

//                     <CurrencyFormat
//                         thousandSeparator={true}
//                         prefix={'$'}
//                         placeholder="Sum"
//                         className="Charity__Input1"
//                         onChange={this.handleSumChange} />
//                 </div>

//                 <div className="Charity__Bottom-Con">
//                     <button className="Charity__Btn">Transfer money</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default Charity;

export default function Charity() {

    const [charityOrganization, setCharityOrganization] = useState('')
    const [sum, setSum] = useState(0)

    const handleCharityOrganizationChange = (event) => {
        setCharityOrganization(event.target.value);
    }

    const handleSumChange = (event) => {
        setSum(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const clearInputValues = () => {
        setCharityOrganization('');
        setSum(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="Charity__Top-Con">
                <select name="" id="Charity__Select" value={charityOrganization} onChange={handleCharityOrganizationChange}>
                    <option value="CharityOrganization1">CharityOrganization1</option>
                    <option value="CharityOrganization2">CharityOrganization2</option>
                    <option value="CharityOrganization3">CharityOrganization3</option>
                    <option value="CharityOrganization4">CharityOrganization4</option>
                    <option value="CharityOrganization5">CharityOrganization5</option>
                </select>

                <CurrencyFormat
                    thousandSeparator={true}
                    prefix={'$'}
                    placeholder="Sum"
                    className="Charity__Input1"
                    value={sum}
                    onChange={handleSumChange} />
            </div>

            <div className="Charity__Bottom-Con">
                <button className="Charity__Btn" onClick={clearInputValues}>Transfer money</button>
            </div>
        </form>
    )
}
