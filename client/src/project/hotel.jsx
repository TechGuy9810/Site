import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import img from '../Image/image2.jpg'
import axios from "axios";
import './hotel.css';
import { useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch.js";
import { AuthContext } from '../context/authContext';
import Reserve from "./reserve";
const Hotel = ()=>{
  const location = useLocation();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const[openmodel,setOpenmodel] = useState(false);
  const [open,setOpen] = useState(false);
  const id = location.pathname.split("/")[2];
  const {data,loading,error} = useFetch(`/hotel/find/${id}`);
  const handleClick = ()=>{
        if(user)
        {
          setOpenmodel(true);
        }
        else{
          navigate("/signup");
        }
  }
    return(
<>
<div className='body'>
    <div className='landing'>
<div className="hotelContainer">
{loading?loading:(
          <div className="hotelWrapper">
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelImage">
             <div className="hotelImageWrapper">
                <img src={img} className="hotelImg"></img>
             </div>
          </div>
          <div className="hotelDetails">
          <div className="hotelAddress" style={{margin:"1%"}}>
            <FontAwesomeIcon icon={faLocation}/>
            <span style={{fontWeight:"bolder"}}>&nbsp;{data.address}</span>
          </div>
            <div className="hotelDetailsTexts font-sans" style={{color:"green",margin:"1%"}}>{data.desc}</div>
            <div className="hotelDetailsTexts"><span style={{fontWeight:"bolder",margin:"1%"}}>Price</span>&nbsp;&nbsp;₹ {data.Price}</div>
            <div className="hotelDetailsTexts"><span style={{fontWeight:"bolder",margin:"1%"}}>Type</span>&nbsp;&nbsp;{data.type}</div>

            <div className="hotelDetailsPrice" style={{margin:"1%"}}><button className="btn btn-danger" onClick={handleClick}>Reserve</button></div>
          </div>

    </div>
      )}
</div>
{openmodel && <Reserve setOpen={setOpenmodel} hotelId={id}/>}
</div>
</div>
</>
    );
}
export default Hotel;