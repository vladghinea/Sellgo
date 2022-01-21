import Chart from 'react-apexcharts'

import StatusCard from "../components/status-card/StatusCard"

import statusCard from '../assets/JsonData/status-card-data.json'

import { Link } from 'react-router-dom'


const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className='row'>
                <div className="col-6">
                    <div className="row">
                        {
                        statusCard.map((item, index) => (
                            <div className="col-6">
                                <StatusCard
                                    icon={item.icon}
                                    count={item.count}
                                    title={item.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                        options={chartOptions}
                        series={chartOptions.series}
                        type='line'
                        height='100%'
                        />                         
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <h3>top customes</h3>
                    </div>
                    <div className="card__body">
                        {/*table*/}
                    </div>
                    <div className="card__footer">
                        <Link to='/'>View All</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard


// [
//     {
//         "icon": "bx bxs-face",
//         "count": "1,995",
//         "title": "Deal seald value"
//     },
//     {
//         "icon": "bx bx-cart",
//         "count": "2,001",
//         "title": "Daily visits"
//     },
//     {
//         "icon": "bx bx-dollar-circle",
//         "count": "$2,632",
//         "title": "Total income"
//     },
//     {
//         "icon": "bx bx-receipt",
//         "count": "1,711",
//         "title": "Total orders"
//     }
// ]