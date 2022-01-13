import React from "react";
import {  ENDPOINTS } from "../../api/Index"

const Card = ({deals,boardId,changePriority}) => {

    const incons = ["⭕️","🔆️","⚠️","🟡","☢️","😵","✅","❌","🟣","⚫️","⚪️","🟤"];
    const dragStart = (e) => {
        const target = e.target;

        e.dataTransfer.setData("card_id", target.id);
    };

    const dragOver = (e) => {
        e.stopPropagation();
    };


    return (
        <>
            {deals.map( (deal) => 
                 (deal.status == boardId)? 
                    (<div 
                        key={deal.id}
                        id={deal.id}
                        className= {`card priority${deal.priority}`}
                        draggable="true"
                        onDragStart={dragStart}
                        onDragOver={dragOver}
                        // onDoubleClick={() =>updatePriority(deal.id)}
                        onDoubleClick={() => changePriority(deal.id)}

                        >
                            Deal:{deal.id} - ClientId:{deal.clientId} {incons.at(boardId)}
                        </div>):""                
            )}
        </>
    );
};
export default Card;
