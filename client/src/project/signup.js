import React from 'react';
import axios from "axios";
import {useState} from "react";
import './signup.css';
import hotel2 from '../Image/signup3.jpg';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
function Signin() {
  const [inputs,setInputs] = useState({
    email:undefined,
    password:undefined
  });
  const {loading,error,dispatch} = useContext(AuthContext);

  const [err,setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) =>{
setInputs(prev=>({...prev,[e.target.id]:e.target.value}))
  }
  const handleSubmit = async e =>{
    e.preventDefault();
    dispatch({type:"LOGIN_sTART"});
    try{
    const res = await axios.post("/auth/login",inputs);
    dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    navigate("/");
    }
    catch(err)
    { 
         dispatch({type:"LOGIN_FAILURE",payload:err.response.data});
    }
  }
  return (
    <>
<div class="bodydiv">
<div class="maincontainer">
    <div class="heading"><p>Lu<span>X</span>ry</p></div>
    <div class="containerdiv">
    <div class="form-content">
      <form action="#" method="post">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required onChange={handleChange}/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required onChange={handleChange}/>
        <input type="submit" value="Login" onClick={handleSubmit}/>
        <Link to="/signin">Dont have an account?</Link>
      </form>
    </div>
    <div class="form-image">
    <img src={hotel2} width={350} height={250}/>
    </div>
  </div>
</div>
</div>
  </>
  );
}

export default Signin;