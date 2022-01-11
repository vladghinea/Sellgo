import React from 'react'




const Pipedashboard = (props) => {
    return (       
        < div className="row col-12"> 
            {
                props.headData.map((item,index) => props.renderHead(item, index))
            }
        </div>
      
  
    )
}

export default Pipedashboard
