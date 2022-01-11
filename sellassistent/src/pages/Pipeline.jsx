import React from 'react'
import Pipedashboard from '../components/inpipelineLayout/Pipedashboard'

const factoryElement = (item,index) => (
    <div key={index} className="card col-2 mr-5 ">                        
        <div className="card__body text-center ">
            {item}
        </div>                  
</div>
)
const titles = ['Lead in', 'Contact Made', 'Need Defined', 'Proposal Made', 'Negotiations', 'Done',]


const Pipeline = props => {
    return (
        <div>
            <Pipedashboard headData={titles} renderHead= {(item, index)=>factoryElement(item, index)} />
        </div>

    )
}

export default Pipeline
