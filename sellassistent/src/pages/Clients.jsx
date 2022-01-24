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
    "Company":"Fix Home Imob SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"18/02/2022",
    "Prority":"High",
    "DealSize":"300.000 $"
    },
    {"Client":"Lamine",
    "Company":"Keit Kalon SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"18/01/2022",
    "Prority":"High",
    "DealSize":"520.000 $"
    },
    {"Client":"Radu",
    "Company":"Company SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"26/02/2022",
    "Prority":"Low",
    "DealSize":"120.000 $"
    },
    {"Client":"Marius",
    "Company":"Home SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"17/02/2022",
    "Prority":"Medium",
    "DealSize":"90.000 $"
    },
    {"Client":"Stalone",
    "Company":"Silvester SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"25/02/2022",
    "Prority":"High",
    "DealSize":"240.000 $"
    },
    {"Client":"Ema",
    "Company":"Banc SRL",
    "DealStatus":"Proposal Made",
    "NextInterception":"22/02/2022",
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

const Clients = () => {
    return (
        <div>
            <h2 className="page-header">
                Workboard
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

export default Clients
