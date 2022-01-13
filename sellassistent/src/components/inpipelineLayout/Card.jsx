import React from "react";

const Card = ({deals,boardId}) => {
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
                        className="card"
                        draggable="true"
                        onDragStart={dragStart}
                        onDragOver={dragOver}
                        style={{color: "red"}}
                        >
                            name {deal.id}
                        </div>):""                
            )}
        </>
    );
};
export default Card;
