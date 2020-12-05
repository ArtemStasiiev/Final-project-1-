import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
const FacebookStock = () => {
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = () => {
    const API_KEY = "3PLB9LG173IP7Q8P";
    let StockSymbol = "FB";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (let key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);
      });
  };

  return (
    <Plot
      className="chart"
      data={[
        {
          x: stockChartXValues,
          y: stockChartYValues,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "blue" },
        },
      ]}
      layout={{
        // width: 720,
        // height: 640,
        title: "Facebook stock chart",
        plot_bgcolor: "rgba(0, 0, 0, 0.1)",
        objectFit: "cover",
      }}
      useResizeHandler = {true}
      style={{width: '100%', height: '640px', marginTop: '10px'}}
    />
  );
};
export default FacebookStock;
