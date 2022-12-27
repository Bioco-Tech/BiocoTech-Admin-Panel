import React from 'react'
import Chart from 'react-apexcharts'

function Charts() {

  const options={
    series:[2,4,5],
    labels:['Apple','Banana','Grapes'],
    plotOptions:{
      pie:{
        expandOnClick:false,
        donut:{
          size:'60px',
          labels:{
            show:true,
            total:{
              show:true,
              showAlways:true,
              fontSize:'24px',
              color:'#2787AB'
            }
          }
        }
      }
    }
  }
  const series = [2,4,5]
  return (
    <div>
      <Chart
      options={options}
      series={series}
      type='donut'
      width='100%'
      height={300}
      
      />
    </div>
  )
}

export default Charts