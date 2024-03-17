import React from 'react'
import Chart from 'react-apexcharts'
const TransactionChartSummary = ({expense = 100, income = 100}) => {
  const options = {
    labels: ['expense', 'Income'],
    colors: ['red', 'blue'],
    chart:{
        width: '50px'
    },
    states: {
    hover: {
    filter:{
        type: 'none'
        }
    }
    },
    legend:{
        show:false,
    },
    dataLabels:{
        enabled: false
    },
    hover: {mode: null},
    plotOptions:{
        donut:{
            expandOnClick: false,
            donut:{
                labels:{
                    show: false
                }
            }
        }
    },
    fill:{
        colors: ['red', 'blue']
    },
    tooltip:{
        enabled: true,
        theme: 'dark',
        style:{
            fontSize: "12",
            fontFamily: undefined,
            backgroundColor: '#000000',
        }
    }
  }
  return (
    <>
    <Chart
    options={options}
    series={[expense , income ]}
    type='pie'
    width={'100%'}
    height={'100%'}
    />
    </>
  )
}

export default TransactionChartSummary