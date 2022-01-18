import Card from "./Card";
import React from "react";
import {useEffect ,useState} from 'react'
import {  ENDPOINTS } from "../../api/Index"
import { useSelector} from 'react-redux'

const Board = (props) => {
    const user = useSelector(state=> state.authRedux);

    const [deals, setDeals] = useState([]);
    useEffect(() => {
        const fetchDeals = async () => {
            const res = await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.DEAL}dealsforuser/${user.user.id}`);
            let data = await res.json();
            setDeals(data);
        };
        fetchDeals();
    });
    const fetchDeal = async (id) => {
        const res = await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.DEAL}${id}`);
        const data = await res.json();

        return data;
    };

    const updateDeal = async (id,statusId) => {
        const taskToToggle = await fetchDeal(id);
        const updTask = { ...taskToToggle, status: statusId };

        await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.DEAL}${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updTask),
        });
    };

    const drop = async (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData("card_id");
        const statusId = e.target.getAttribute("statusid")

        /// DRAG AN DROP ON FRONTEND
        // const card = document.getElementById(card_id);
        // card.style.display = "block";
        // e.target.appendChild(card);
        
        updateDeal(card_id,statusId)
        
    };
    const changePriority = async (id) =>{
        const dealToChangePriority = await fetchDeal(id);
        let priority = 0;
        if (dealToChangePriority.priority === 0) {
            priority = 1;
        }else if (dealToChangePriority.priority === 1) {
            priority = 2;
        }

        const updDeal = { ...dealToChangePriority, priority: priority };
        await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.DEAL}${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updDeal),
        });
    }
    

    const dragOver = (e) => {
        e.preventDefault();
    };
    return (
        <><span>Priority: <b style={{color : "red"}}>High</b>, <b style={{color : "yellow"}}>Medium</b>, <b style={{color : "#00c8e2"}}>Low</b></span>
            {
                props.headData.map((item,index) => 
                <div 
                    key={index}
                    statusid={index}
                    draggable="false"
                    onDrop={drop}
                    onDragOver={dragOver}
                    className="card col-3"> {item}  
                        <Card deals={deals} boardId={index} changePriority={changePriority} />
                </div>
                )
            }   
        </>
    );
};

export default Board;
