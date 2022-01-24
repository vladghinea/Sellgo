import React from 'react';
import DealBoard from '../components/workboard/DealBoard';
import HeadBoard from '../components/workboard/HeadBoard';


const Workboard = () => {
  return <div>            
           <HeadBoard />
          <br />
           <div  className="container scroll">
              <DealBoard />
              <DealBoard />
              <DealBoard />
              <DealBoard />
              <DealBoard />
              <DealBoard />
              <DealBoard />
              <DealBoard />
            </div>

         </div>;
};

export default Workboard;
