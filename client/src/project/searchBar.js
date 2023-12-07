import React from 'react';
import { useNavigate } from "react-router-dom";
import './searchBar.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faCity, } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../Image/gucci.png';
import logo2 from '../Image/chanel-logo.png';
import logo3 from '../Image/handm.png';
import logo4 from '../Image/levi.png';
import logo5 from '../Image/nike1.png';
import logo6 from '../Image/adidas.png';
import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';
const { RangePicker } = DatePicker;
const SelectCityOptions = [{ label: "Mumbai", value: 1 }, { label: "Delhi", value: 2 }, { label: "Kolkata" }];
function SearchBar() {
  const [destination, setDestination] = useState();
  const [dates,setDates] = useState([
   {
    start: new Date(),
    end: new Date(),
    key:"selection",
  }
  ]);
  const navigate = useNavigate();
  function filterByDate(d) {
      setDates([d]);
  }
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const {dispatch} = useContext(SearchContext);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}});
    navigate('/list', { state: { country: "India", des: destination,opt: options, dat:dates} });
  }
  return (<>
    <div class="main-row-search">
      <div class="main-col1">
        <div class="location-logo">
          <FontAwesomeIcon icon={faCity} style={{ color: "rgb(242, 75, 103)" }} />
        </div>
        <div class="location">
          <select className='form-select' onChange={e => setDestination(e.target.value)} style={{ border: "none" }}>
          <option value="" disabled selected>Destination</option>
            {SelectCityOptions.map(option => (
              <option value={option.label}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div class="main-col2">
        <div class="rooms-logo">
          <FontAwesomeIcon icon={faHotel} style={{ color: "rgb(242, 75, 103)" }} />
        </div>
        <div class="rooms-select">
          <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          {openOptions && <div className='options'>
            <div className='optionItem'>
              <span className='optionText'>Adult</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-</button>
                <button className='optionCouterNumber'>{options.adult}</button>
                <button className='optionCouterButton' onClick={() => handleOption("adult", "i")}>+</button>
              </div>
            </div>
            <div className='optionItem'>
              <span className='optionText'>Children</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-</button>
                <button className='optionCouterNumber'>{options.children}</button>
                <button className='optionCouterButton' onClick={() => handleOption("children", "i")}>+</button>
              </div>
            </div>
            <div className='optionItem'>
              <span className='optionText'>Room</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>-</button>
                <button className='optionCouterNumber'>{options.room}</button>
                <button className='optionCouterButton' onClick={() => handleOption("room", "i")}>+</button>
              </div>
            </div>
          </div>}
        </div>
      </div>
      <div class="main-col3">
        <div class="date-select">
          <RangePicker format='DD-MM-YYYY' style={{ height: "100%", width: "100%", border: 'none' }} onChange={filterByDate} />
        </div>
        <div class="search">
          <button class="search-button" onClick={handleSearch}>Check Now</button>
        </div>
      </div>
    </div>
    <div class="comp-section-main">
      <div class="social-media-main">
        <div class="social-media-div1">
          <ul>
            <li><img src={logo1} style={{ width: "3vw" }}></img></li>
            <li><img src={logo2} style={{ width: "3vw" }}></img></li>
            <li><img src={logo3} style={{ width: "3vw" }}></img></li>
            <li><img src={logo4} style={{ width: "3vw" }}></img></li>
            <li><img src={logo5} style={{ width: "3vw" }}></img></li>
            <li><img src={logo6} style={{ width: "3vw" }}></img></li>
            <li>100+&nbsp;&nbsp;More</li>
          </ul>
        </div>
      </div>
    </div>
  </>);
}
export default SearchBar;