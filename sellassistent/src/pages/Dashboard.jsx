import React from 'react'

import Table from '../components/table/Table'


const customTableHead = [
    'Client',
    'Company',
    'Deal Status',
    'Next Interception',
    'Prority',
    'Deal Size'
]

const customTableBodyData=[
    {"Client":"Vlad",
    "Company":"Home SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"Tomorrow",
    "Prority":"High",
    "DealSize":"500.000 $"
    },
    {"Client":"Vlad",
    "Company":"Home SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"Tomorrow",
    "Prority":"High",
    "DealSize":"500.000 $"
    },
    {"Client":"Vlad",
    "Company":"Home SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"Tomorrow",
    "Prority":"High",
    "DealSize":"500.000 $"
    },
    {"Client":"Vlad",
    "Company":"Home SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"Tomorrow",
    "Prority":"High",
    "DealSize":"500.000 $"
    },
    {"Client":"Vlad",
    "Company":"Home SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"Tomorrow",
    "Prority":"High",
    "DealSize":"500.000 $"
    },
    {"Client":"Vlad",
    "Company":"Home SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"Tomorrow",
    "Prority":"High",
    "DealSize":"500.000 $"
    }

]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    
    <tr key={index}>
        <td>{item.Client}</td>
        <td>{item.Company}</td>
        <td>{item.DealStatus}</td>
        <td>{item.NextInterception}</td>
        <td>{item.Prority}</td>
        <td>{item.DealSize}</td>
    </tr>
)

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">
                Dashboard
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={ []}
                                 renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                             <Table
                                limit='10'
                                headData={[]}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customTableBodyData}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
