import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function Chart() {
  ChartJS.register(ArcElement);

const data = {
  labels: ["Hired", "Canceled", "Pending"],
  datasets: [
    {
      label: "Total",
      data: [54, 20, 26],
      backgroundColor: ["rgb(132, 204 ,22)","rgb(8 145 178)",'rgb(156 163 175)'],
      position:'outside',

      }, 
  ],
};



  return (
    <div>
       <Doughnut
                data={data}
                options={{ cutout: "65%" }}
                className=" "
               
              />
    </div>
  )
}

export default Chart