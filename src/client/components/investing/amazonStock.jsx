// import React, { useState, useEffect } from 'react'
// import React, {Component} from 'react';
// import React, { Component } from 'react';
// import Plot from 'react-plotly.js';


// class AmazonStock extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             stockChartXValues: [],
//             stockChartYValues: []
//         }
//     }

//     componentDidMount = () => {
//         this.fetchStock();
//     }

//     fetchStock = () => {
//         const pointerToThis = this
//         console.log(this)
//         const API_KEY = "3PLB9LG173IP7Q8P";
//         let StockSymbol = 'AMZN'
//         let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//         let stockChartXValuesFunction = [];
//         let stockChartYValuesFunction = [];
//         fetch(API_Call)
//             .then(
//                 function (response) {
//                     return response.json();
//                 }
//             )
//             .then(
//                 function (data) {
//                     console.log(data)

//                     for (let key in data['Time Series (Daily)']) {
//                         stockChartXValuesFunction.push(key);
//                         stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
//                     }
//                     // console.log(stockChartXValuesFunction);
//                     pointerToThis.setState({
//                         stockChartXValues: stockChartXValuesFunction,
//                         stockChartYValues: stockChartYValuesFunction
//                     })
//                 }
//             )
//     }

//     render() {
//         return (
//             <Plot
//                 data={[
//                     {
//                         x: this.state.stockChartXValues,
//                         y: this.state.stockChartYValues,
//                         type: 'scatter',
//                         mode: 'lines+markers',
//                         marker: { color: 'orange' },
//                     },
//                     // { type: 'line', x: [1, 2, 3], y: [2, 5, 3] },
//                 ]}
//                 layout={{ width: 720, height: 640, title: 'Amazon stock chart', plot_bgcolor: 'rgba(0, 0, 0, 0.1)' }}
//             />
//         )
//     }
// }

// export default AmazonStock

// export default function AmazonStock() {

//     const [stockChartXValues, setStockChartXValues] = useState();
//     const [stockChartYValues, setStockChartYValues] = useState();

//     useEffect(() => {
//         fetchStock();
//     });

//     const fetchStock = () => {
//         // const pointerToThis = this
//         // console.log(this)
//         const API_KEY = "3PLB9LG173IP7Q8P";
//         let StockSymbol = 'AMZN'
//         let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
//         let stockChartXValuesFunction = [];
//         let stockChartYValuesFunction = [];
//         fetch(API_Call)
//             .then(
//                 function (response) {
//                     return response.json();
//                 }
//             )
//             .then(
//                 function (data) {
//                     console.log(data)

//                     for (let key in data['Time Series (Daily)']) {
//                         stockChartXValuesFunction.push(key);
//                         stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
//                     }
//                     setStockChartXValues(stockChartXValuesFunction);
//                     setStockChartYValues(stockChartYValuesFunction)
//                 }
//             )
//         }

//     return (
//         <Plot
//             data={[
//                 {
//                     x: setStockChartXValues,
//                     y: setStockChartYValues,
//                     type: 'scatter',
//                     mode: 'lines+markers',
//                     marker: { color: 'orange' },
//                 },
//                 // { type: 'line', x: [1, 2, 3], y: [2, 5, 3] },
//             ]}
//             layout={{ width: 720, height: 640, title: 'Amazon stock chart', plot_bgcolor: 'rgba(0, 0, 0, 0.1)' }}
//         />
//     )
// }

import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
const AmazonStock = () => {
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);

    useEffect(() => {
        fetchStock();
    }, []);

    const fetchStock = () => {
        const API_KEY = "3PLB9LG173IP7Q8P";
        let StockSymbol = 'AMZN';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    for (let key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    setStockChartXValues(stockChartXValuesFunction);
                    setStockChartYValues(stockChartYValuesFunction);
                }
            )
    }

    return (
        <Plot
            data={[
                {
                    x: stockChartXValues,
                    y: stockChartYValues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'orange' }
                }
            ]}
            layout={{ width: 720, height: 640, title: 'Amazon stock chart', plot_bgcolor: 'rgba(0, 0, 0, 0.1)' }}
        />
    )
}
export default AmazonStock;