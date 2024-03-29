
import Chart from 'react-apexcharts'

const options = {
    labels: ["expense", "Income"],
    colors:["#ff8d39", "#384b63"],
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
        colors: ['#ff8d39', "#384b63"]
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
  const TransactionChartSummary = ({expense = 100, income = 100}) => {
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