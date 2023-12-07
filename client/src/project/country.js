import React from 'react';
import useFetch from "../hook/useFetch";
import './featured.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Country=()=>{
  const navigate = useNavigate();
const {data,loading,error}= useFetch("/hotel/country?limit=3");
const [options, setOptions] = useState({
  adult: 1,
  children: 0,
  room: 1
});
const handleClick = async (event)=>{
  const city = event.target.id;
  const countr = event.target.name;
  navigate('/list', { state: { country: countr, des: city, opt: options, dateStart: null, dateEnd: null } });
}
return(
    <>
    <div class="container row" id="container-package2">
  <div class="card-Heading"><p class="text-2xl">Popular <span style={{color:'rgb(242, 75, 103)'}}>Destinations</span></p></div>
  {loading ? ("loading please wait"):(<>
    <div class="row" id="child-row">
    {data.map((item)=>(
          <div class="col-sm" key={item.id}>
          <div class="card">
        <img class="card-img-top" src={`/Image/${item.photos}.jpg`} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title text-xl font-bold">{item.city}, {item.country}</h5>
          <div style={{display:"flex",justifyContent:"space-between",fontWeight:"600"}}><a class="btn btn-primary" id={item.city} name={item.country} onClick={event=>handleClick(event)}>View Now!</a>
          <p>3 Days & 3 Night&nbsp;&nbsp;&nbsp; ₹{item.Price}/-</p>
          </div>
        </div>
      </div>
          </div>
      ))
      }
  </div></>)}
  </div>
    </>
);
}
export default Country;