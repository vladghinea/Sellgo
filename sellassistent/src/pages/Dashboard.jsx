import Board from "../components/inDashboardLayout/Bord"
import statusCard from '../assets/JsonData/status-card-data.json'
 
const Dashboard =()=>{
    return (
        <div>
            <h2>Dashboard Page </h2>
            <div className='row'>
                <div className="col-6">
                    <div className="row">
                        {
                            statusCard.map((item,index)=>(
                                <div>
                                    {}
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Board></Board>
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