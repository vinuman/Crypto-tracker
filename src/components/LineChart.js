import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumbers } from "../functions/convertNumbers";

import Loader from "./common/Loader";

function LineChart({ chartData, priceType, multiAxis }) {
  if (!chartData || !chartData.labels || chartData.datasets.length === 0) {
    return <Loader />;
  }
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type: "linear",
        display: false,
        position: "left",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumbers(value);
            } else if (priceType == "market_caps") {
              return "$ " + convertNumbers(value);
            } else {
              return "$ " + value.toLocaleString();
            }
          },
        },
      },
      y2: multiAxis && {
        type: "linear",
        display: false,
        position: "right",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumbers(value);
            } else if (priceType == "market_caps") {
              return "$" + convertNumbers(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
