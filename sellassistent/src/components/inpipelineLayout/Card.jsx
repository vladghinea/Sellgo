import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const Card = ({ deals, boardId, changePriority }) => {
    const incons = [
        "⭕️",
        "🔆️",
        "⚠️",
        "🟡",
        "☢️",
        "😵",
        "✅",
        "❌",
        "🟣",
        "⚫️",
        "⚪️",
        "🟤",
    ];
    const dragStart = (e) => {
        const target = e.target;

        e.dataTransfer.setData("card_id", target.id);
    };

    const dragOver = (e) => {
        e.stopPropagation();
    };

    const prioritys = ["Low Priority", "Medium Priority", "High Priority"];

    return (
        <>
            {deals.map((deal) =>
                deal.status == boardId ? (
                    <Tippy
                        key={`tippy-${deal.id}`}
                        content={
                            <span className={`colorpriority${deal.priority}`}>
                                {prioritys.at(deal.priority)}
                            </span>
                        }
                    >
                        <div
                            key={`status-${deal.id}`}
                            id={deal.id}
                            className={`card priority${deal.priority}`}
                            draggable="true"
                            onDragStart={dragStart}
                            onDragOver={dragOver}
                            // onDoubleClick={() =>updatePriority(deal.id)}
                            onDoubleClick={() => changePriority(deal.id)}
                            style={{ cursor: "pointer" }}
                        >
                            Deal:{deal.id} - ClientId:{deal.clientId}{" "}
                            {incons.at(boardId)}
                        </div>
                    </Tippy>
                ) : (
                    ""
                )
            )}
        </>
    );
};
export default Card;
