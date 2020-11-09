import React, { useState } from 'react';
import '../../../../styles/components/payments/education.scss';
import CurrencyFormat from 'react-currency-format';


// class Education extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             university: '',
//             faculty: '',
//             sum: null
//         }
//     }

//     handleUniversityChange = (event) => {
//         this.setState({ university: event.target.value })
//     }

//     handleFacultyChange = (event) => {
//         this.setState({ faculty: event.target.value })
//     }

//     handleSumChange = (event) => {
//         this.setState({ sum: event.target.value })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//     }

//     render() {
//         console.log(this.state.university)
//         console.log(this.state.faculty)
//         console.log(this.state.sum)
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="Education__Top-Con">
//                     <select name="" id="Education__Select1" onChange={this.handleUniversityChange}>
//                         <option value="University1">University1</option>
//                         <option value="University2">University2</option>
//                         <option value="University3">University3</option>
//                         <option value="University4">University4</option>
//                         <option value="University5">University5</option>
//                     </select>

//                     <select name="" id="Education__Select2" onChange={this.handleFacultyChange}>
//                         <option value="Faculty1">Faculty1</option>
//                         <option value="Faculty2">Faculty2</option>
//                         <option value="Faculty3">Faculty3</option>
//                         <option value="Faculty4">Faculty4</option>
//                         <option value="Faculty5">Faculty5</option>
//                     </select>
//                 </div>

//                 <div className="Education__Bottom-Con">
//                     <CurrencyFormat
//                         thousandSeparator={true}
//                         prefix={'$'}
//                         placeholder="Sum"
//                         className="Education__Sum-Inp"
//                         onChange={this.handleSumChange} />
//                     <button className="Education__Btn">Transfer money</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default Education;


export default function Education() {

    const [university, setUniversity] = useState('');
    const [faculty, setFaculty] = useState('');
    const [sum, setSum] = useState(0)
    // university: '',
    // faculty: '',
    // sum: null


    const handleUniversityChange = (event) => {
        setUniversity (event.target.value)
    }

    const handleFacultyChange = (event) => {
        setFaculty (event.target.value)
    }

    const handleSumChange = (event) => {
        setSum (event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const clearInputValues = () => {
        setUniversity('');
        setFaculty('');
        setSum(0);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="Education__Top-Con">
                <select name="" id="Education__Select1" value={university} onChange={handleUniversityChange}>
                    <option value="University1">University1</option>
                    <option value="University2">University2</option>
                    <option value="University3">University3</option>
                    <option value="University4">University4</option>
                    <option value="University5">University5</option>
                </select>

                <select name="" id="Education__Select2" value={faculty} onChange={handleFacultyChange}>
                    <option value="Faculty1">Faculty1</option>
                    <option value="Faculty2">Faculty2</option>
                    <option value="Faculty3">Faculty3</option>
                    <option value="Faculty4">Faculty4</option>
                    <option value="Faculty5">Faculty5</option>
                </select>
            </div>

            <div className="Education__Bottom-Con">
                <CurrencyFormat
                    thousandSeparator={true}
                    prefix={'$'}
                    placeholder="Sum"
                    className="Education__Sum-Inp"
                    value={sum}
                    onChange={handleSumChange} />
                <button className="Education__Btn" onClick={clearInputValues} >Transfer money</button>
            </div>
        </form>
    )
}