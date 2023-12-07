import React from 'react'
import { useState} from "react";
import {NavLink, useLocation} from 'react-router-dom';
import './list.css';
import useFetch from '../hook/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHotel, faCity,} from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from 'antd';
import { SearchContext } from '../context/searchContext';
import { useContext } from 'react';
const { RangePicker } = DatePicker;
const SelectCityOptions=[ {label:"Mumbai",value:1},{label:"Delhi",value:2},{label:"Kolkata"}];
const List = ()=>{
  const location = useLocation();
    const[destination,setDestination] = useState(location.state.des);
    const [dates,setDates] = useState(location.state.dat);
    const [openOptions, setOpenOptions] = useState(false);
    const [options,setOptions] = useState(location.state.opt);
    const [max,setMax] = useState(10000);
    const [min,setMin] = useState(0);
    const {dispatch} = useContext(SearchContext);
    function filterByDate(d) {
      setDates([d]);
  }
    const handleOption = (name,operation)=>{
      setOptions((prev)=>{return {
        ...prev, [name]: operation==="i" ? options[name]+1:options[name]-1,
      };
    });
    };
    const abc =()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}});
        reFetch();
    }
    const {data,loading,error,reFetch} = useFetch(`/hotel/requested?city=${destination}&country=${location.state.country}`);
    return(
<>
<div className='body'>
    <div className='landing'>

    <div class="main-row-search">
<div class="main-col1">
    <div class="location-logo">
    <FontAwesomeIcon icon={faCity} style={{color:"rgb(242, 75, 103)"}}/>
    </div>
   <div class="location">
   <select className='form-select' onChange={e => setDestination(e.target.value)} style={{ border: "none" }}>
          <option value="" disabled selected>{destination}</option>
            {SelectCityOptions.map(option => (
              <option value={option.label}>{option.label}</option>
            ))}
          </select>
    </div> 
</div>
<div class="main-col2">
    <div class="rooms-logo">
    <FontAwesomeIcon icon={faHotel} style={{color:"rgb(242, 75, 103)"}}/>
    </div>
      <div class="rooms-select">
        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
      {openOptions &&<div className='options'>
      <div className='optionItem'>
          <span className='optionText'>Adult</span>
          <div className='optionCounter'>
          <button className='optionCouterButton' onClick={()=>handleOption("adult","d")} disabled={options.adult<=1}>-</button>
          <button className='optionCouterNumber'>{options.adult}</button>
          <button className='optionCouterButton' onClick={()=>handleOption("adult","i")}>+</button>
          </div>
        </div>
        <div className='optionItem'>
          <span className='optionText'>Children</span>
          <div className='optionCounter'>
          <button className='optionCouterButton' onClick={()=>handleOption("children","d")} disabled={options.children<=0}>-</button>
          <button className='optionCouterNumber'>{options.children}</button>
          <button className='optionCouterButton' onClick={()=>handleOption("children","i")}>+</button>
          </div>
        </div>
        <div className='optionItem'>
          <span className='optionText'>Room</span>
          <div className='optionCounter'>
          <button className='optionCouterButton' onClick={()=>handleOption("room","d")} disabled={options.room<=1}>-</button>
          <button className='optionCouterNumber'>{options.room}</button>
          <button className='optionCouterButton'onClick={()=>handleOption("room","i")}>+</button>
          </div>
        </div>
      </div>}
     </div>
</div>
<div class="main-col3">
     <div class="date-select">
         <RangePicker format='DD-MM-YYYY' style={{height:"100%", width:"100%", border:'none'}} onChange={filterByDate} />
      </div>
     <div class="search">
        <button class="search-button" onClick={abc}>Check Now</button>
     </div>
</div> 
</div>

<div class="main-row-search-1">
<div class="main-col1-1">
       <input type="number" onChange={event=>setMax(event.target.value) } placeholder='Max ₹'/>
</div>
<div class="main-col2-1">
   <input type="number" onChange={event=>setMin(event.target.value)} placeholder='Min ₹'/>
</div>
</div>
      <div class="container row" id="container-list">
        <div class="row" id="child-row">
          <div class="col-sm">
          {loading?loading:(data.filter((val)=>{
            if(val.Price<=max&&val.Price>min)
            {
              return val;
            }
          })).map((i)=>{
        return(<>
            <div class="card-list">
              <div class="card-image"><img id="card-image-list" src={`/Image/${i.photos}.jpg`} alt="Card image cap"/></div>
             <div class="card-body">
                 <h5 class="card-title text-xl font-bold">{i.name}</h5>
                 <p class="hotel-type">{i.type}</p>
                 <h6 class="hotel-city">{i.city}</h6>
                 <p class="hotel-address">{i.address}</p>
                 <p class="hotel-desc">{i.desc}</p>
                 <NavLink to={`/hotel/${i._id}`}><a class="btn btn-danger">View Now!</a></NavLink>
              </div>
             </div>
             </>);})}
            </div>
         </div>
       </div>

    </div>
</div>
</>
    );
}
export default List;