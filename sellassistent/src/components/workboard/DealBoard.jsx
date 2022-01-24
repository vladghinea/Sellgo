import React from 'react';
import "./dealBoard.css"

const DealBoard = () => {
  return < div className="container card">
                <div className='row'>
                    <div className='col pill pillClient'>
                         <div className='pillText'>clients </div>
                    </div>
                    <div className='col pill pillCompany'>
                        <div className='pillText'>company</div>
                    </div>
                    <div className='col pill pillDealStatus'>
                        <div className='pillText'>deal status</div>
                    </div>
                    <div className='col pill pillInterception'>
                        <div className='pillText'>interception</div>
                    </div>
                    <div className='col pill pillPriority'>
                        <div className='pillText'> priority</div>
                    </div>
                    <div className='col pill PillDealSize'>
                        <div className='pillText'>deal size</div>
                    </div>
                    <div className='col pill pillProduct'>
                        <div className='pillText'>products</div>
                    </div>      
                </div>
            </div>;
};

export default DealBoard;
