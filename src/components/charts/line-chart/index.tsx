import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { ILineChartProps } from "../../../common/types/assets";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: FC<ILineChartProps> = (props: ILineChartProps) => {
  const { data } = props;
  const notcoin = "Notcoin";

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const values = {
    labels: data[0].prices.map((element: any) =>
      moment(element[0]).format("DD.MM.YY")
    ),
    datasets: [
      {
        label: notcoin,
        data: data[0].prices.map((element: any) => element[1]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={values} width="100%" height="20%" />;
};

export default LineChart;
