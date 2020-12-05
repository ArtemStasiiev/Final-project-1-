import React from "react";
import "../../../styles/components/home/expenseIncomeChart.scss";
import { Line } from "react-chartjs-2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function expenseIncomeChart() {
  const expensesData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Expenses per month",
        data: [338, 420, 554, 282, 350, 220],
        borderColor: "rgb(85, 73, 252)",
        lineTension: 0.3,
        pointBackgroundColor: "white",
        borderColor: "rgb(64, 65, 75)",
      },
    ],
  };

  const incomesData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Income per month",
        data: [500, 700, 600, 820, 700, 600],
        borderColor: "rgb(85, 73, 252)",
        lineTension: 0.3,
        pointBackgroundColor: "white",
        borderColor: "rgb(64, 65, 75)",
      },
    ],
  };

  return (
    <Tabs>
      <TabList>
        <div className="tab-list">
          <Tab className="tab">Expenses</Tab>
          <Tab className="tab">Income</Tab>
        </div>
      </TabList>

      <TabPanel>
        <Line
          options={{
            responsive: true,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
          legend={{
            display: false,
          }}
          data={expensesData}
        />
      </TabPanel>
      <TabPanel>
        <Line
          options={{
            responsive: true,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
          legend={{
            display: false,
          }}
          data={incomesData}
        />
      </TabPanel>
    </Tabs>
  );
}
