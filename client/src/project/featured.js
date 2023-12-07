import React, { useState } from 'react';
import useFetch from "../hook/useFetch";
import { useNavigate } from 'react-router-dom';
import './featured.css';
const Featured=()=>{
  const navigate = useNavigate();
  const {data,loading,error}= useFetch("/hotel/featured?limit=3");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const handleClick = async (event)=>{
    const a = event.target.id;
  navigate('/list', { state: { country: "India", des: a, opt: options, dateStart: null, dateEnd: null } });
  }
return(
    <>

<div class="container row" id="container-package1">
  <div class="card-Heading"><p class="text-2xl">Popular <span style={{color:'rgb(242, 75, 103)'}}>Cities</span></p></div>
  {loading ? ("loading please wait"):(<>
    <div class="row" id="child-row">
    {data.map((item)=>(
          <div class="col-sm" key={item.id} id='card'>
          <div class="card">
        <img class="card-img-top" src={`/Image/${item.photos}.jpg`} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title text-xl font-bold">{item.city}</h5>
          <div style={{display:"flex",justifyContent:"space-between",fontWeight:"500"}}><a class="btn btn-primary" id={item.city} name={item.country} onClick={event=>handleClick(event)}>View Now!</a>
          <p>Premium in  ₹{item.Price}/-</p>
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
export default Featured;