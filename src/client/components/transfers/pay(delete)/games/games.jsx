import React, { useState } from 'react';
import '../../../../styles/components/payments/games.scss';
import CurrencyFormat from 'react-currency-format';


// class Games extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             game: '',
//             sum: 0
//         }
//     }

//     handleGameChange = (event) => {
//         this.setState({ game: event.target.value })
//     }

//     handleSumChange = (event) => {
//         this.setState({ sum: event.target.value })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="Games__Top-Con">
//                     <select name="" id="Games__Select" onChange={this.handleGameChange}>
//                         <option value="Game1">Game1</option>
//                         <option value="Game2">Game2</option>
//                         <option value="Game3">Game3</option>
//                         <option value="Game4">Game4</option>
//                         <option value="Game5">Game5</option>
//                     </select>

//                     <CurrencyFormat
//                         thousandSeparator={true}
//                         prefix={'$'}
//                         placeholder="Sum"
//                         className="Games__Sum-Input"
//                         onChange={this.handleSumChange} />
//                 </div>

//                 <div className="Games__Bottom-Con">
//                     <button type="submit" className="Games__Btn" >Transfer money</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default Games;

export default function Games() {

    const [game, setGame] = useState('');
    const [sum, setSum] = useState(0);

    const handleGameChange = (event) => {
        setGame (event.target.value)
    }

    const handleSumChange = (event) => {
        setSum (event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const clearInputValues = () => {
        setGame('');
        setSum(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="Games__Top-Con">
                <select name="" id="Games__Select" value={game} onChange={handleGameChange}>
                    <option value="Game1">Game1</option>
                    <option value="Game2">Game2</option>
                    <option value="Game3">Game3</option>
                    <option value="Game4">Game4</option>
                    <option value="Game5">Game5</option>
                </select>

                <CurrencyFormat
                    thousandSeparator={true}
                    prefix={'$'}
                    placeholder="Sum"
                    className="Games__Sum-Input"
                    value={sum}
                    onChange={handleSumChange} />
            </div>

            <div className="Games__Bottom-Con">
                <button type="submit" className="Games__Btn" onClick={clearInputValues} >Transfer money</button>
            </div>
        </form>
    )
}