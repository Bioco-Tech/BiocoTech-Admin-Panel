import React from 'react'
import {
   Chart as ChartJS,
   ArcElement,
   Tooltip,
   Legend,

} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function Chart() {

    const data = {
       
        
    }
  return (
    <div className='w-64 h-64'>
        <Doughnut>
          
         
        </Doughnut>
    </div>
  )
}

export default Chart