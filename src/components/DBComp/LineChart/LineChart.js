import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
import './chartStyles.css'

const LineChart = ({ChartData, options}) => {
  return (
    <div>
        <Line data={ChartData} options={options} />
    </div>
  )
}

export default LineChart