import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import './reserve.css';
import { motion, useAnimate } from "framer-motion"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { SearchContext } from "../context/searchContext";
import tick from "../Image/tick.png";
const Reserve = ({setOpen,hotelId})=>{
    const navigate = useNavigate;
    const {data,loading,error} = useFetch(`room/${hotelId}`);
    const [room, setRoom] = useState([]);
    const {dates} = useContext(SearchContext);
    const [book,setBook] = useState(false);
    const getDatesRange = (startDate,endDate)=>{
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        let list =[]
        while(date<=end){
            list.push(new Date(date))
            date.setDate(date.getDate()+1)
        }
           return list;
    };
    const allDates = getDatesRange(dates[0][0],dates[0][1]);
    const isAvailable = (roomNumbers)=>{
        const isFound = roomNumbers.unavDates.some((date)=>allDates.includes(new Date(date)));
        return !isFound;
    }
var selected;
    const handleSelect = (e)=>{
 selected = e.target.checked;
 const value = e.target.value;
 setRoom(selected ?[...room,value]:room.filter((item)=>item!==value));
    };
const handleClick = async ()=>{
        try{
        Promise.all(room.map(rid=>{
        const res = axios.put(`/room/avail/${rid}`,{dates:allDates});
    })
    );
    navigate('/');
        }
        
        catch(err)
        {

        }
    };
return(
    <>
<div className="reserve">
<FontAwesomeIcon
icon = {faCircleXmark}
className="rClose"
onClick={()=>setOpen(false)}
style={{fontSize:"2.5vw",cursor:"pointer"}}
/>
    <div className="rContainer">
<div className="cont-reserve">
<h1>Select Your Rooms</h1>
{loading? loading:data.map(item=>(
    <div className="rItem">
        <div className="rItemInfo">
        <div className="roomNumber">Room Numbers:{item.roomNumbers.map((t)=>{
                return(<><label>{t.number}</label>
                <input value={t._id} type="checkbox" onChange={handleSelect}
                disabled={!isAvailable(t)}/>
                </>);
            })}
            <div className="rTitle">Wifi: {item.wifi}</div>
            <div className="rDesc">Freefood: {item.Freefood}</div>
            <div className="rMax">Maximum People: {item.maxPeople}</div></div>
        </div>
        <button className="btn btn-danger" onClick={handleClick}>Reserve Now</button>
    </div>
))}
    </div>
</div>
</div>
    </>
);
}
export default Reserve;