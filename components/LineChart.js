import React from "react";
import { Line } from "react-chartjs-2";

const data = (payload) => {
  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  let items = payload?.data.map((x) => x.data);
  let dates = payload?.data.map((x) =>
    new Date(x.date).toLocaleDateString(undefined, dateOptions)
  );
  let radiusPointsList = [];
  [...Array(payload?.data.length)].map((e, i) => {
    if (i === payload?.data.length - 1) {
      radiusPointsList.push(3);
    } else {
      radiusPointsList.push(0);
    }
  });

  return {
    labels: dates,
    datasets: [
      {
        label: "# of Votes",
        data: items,
        fill: true,
        backgroundColor:
          payload.trendStatus === "Trending"
            ? "#f87872"
            : payload.trendStatus === "Drifting"
            ? "#86bff8"
            : "#c4c7cb",
        borderColor:
          payload.trendStatus === "Trending"
            ? "#f87872"
            : payload.trendStatus === "Drifting"
            ? "#86bff8"
            : "#c4c7cb",
        pointRadius: radiusPointsList
      },
    ],
  };
};

const options = {
  legend: { display: false },
  tooltips: {
    mode: "index",
    intersect: false,
    displayColors: false,
    titleFontFamily: "Open Sans",
    titleFontSize: 15,
    titleMarginBottom: 30,
    bodyAlign: "center",
    bodyFontSize: 20,
    caretPadding: 15,
    caretSize: 10,
    cornerRadius: 9,
    bodySpacing: 20,
    callbacks: {
      label: function (tooltipItems, data) {
        return tooltipItems.yLabel;
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          stepSize: 1,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: true,
          autoSkip: true,
          maxTicksLimit: 1,
          maxRotation: 0,
          minRotation: 0,
          fontSize: 11,
          fontStyle: "bold",
          fontColor: "#444954",
          userCallback: function (label, index, labels) {
            if (index === 0) {
              let startLabel = labels[0].split(",");
              return startLabel[0].split(" ")[0] + startLabel[1];
            }
            if (index === labels.length - 1) {
              let endLabel = labels[labels.length - 1].split(",");
              return endLabel[0].split(" ")[0] + endLabel[1];
            }
          },
        },
      },
    ],
  },
};

const LineChart = (props) => {
  return <Line data={data(props.payload)} options={options} />;
};

export default LineChart;
