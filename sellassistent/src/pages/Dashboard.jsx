import Board from "../components/inDashboardLayout/Bord"

import StatusCard from "../components/status-card/StatusCard"

import statusCard from '../assets/JsonData/status-card-data.json'


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
                    <div className="card full-height"></div>
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