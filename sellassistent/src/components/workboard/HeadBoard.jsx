import React from 'react';
import "./dealBoard.css"

const HeadBoard = () => {
  return < div className="container paddingHeader">
                <div className='row'>
                    <div className='col headpill'> clients </div>
                    <div className='col headpill'>company</div>
                    <div className='col headpill'> deal status</div>
                    <div className='col headpill'>interception</div>
                    <div className='col headpill'> priority</div>
                    <div className='col headpill'>deal size</div>
                    <div className='col headpill'>products</div>      
                </div>
            </div>;
};

export default HeadBoard;