import React from 'react';
import axios from "axios";
import {useState} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram,faGoogle} from '@fortawesome/free-brands-svg-icons';
import './signin.css';
import hotel2 from '../Image/signup3.jpg';
import {useNavigate } from 'react-router-dom';
function Signup() {
  const [inputs,setInputs] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })
  const [err,setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = e =>{
setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
    const res = await axios.post("/auth/register",inputs)
    navigate("/signup");
    }
    catch(err)
    {
       setError(err.response.data);
    }
  }
  return (
    <>
<div class="bodydiv">
<div class="maincontainer">
    <div class="heading"> <p>Lu<span>X</span>ry</p></div>
    <div class="containerdiv">
    <div class="form-content">
      <form action="#" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required onChange={handleChange}/>
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required onChange={handleChange}/>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required onChange={handleChange}/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required onChange={handleChange}/>
        <input type="submit" value="Sign Up" onClick={handleSubmit}/>
        {err&&<p>Error registering user</p>}
      </form>
    </div>
    <div class="formImag-main">
    <div class="form-image">
    <img src={hotel2} width={500} height={400}/>
    </div>
    <div class="signupwith"><ul><li><p>Sign up with</p></li><li><p><Link><FontAwesomeIcon icon={faGoogle}/></Link></p></li>
        <li><p><Link><FontAwesomeIcon icon={faFacebook}/></Link></p></li>
        <li><p><Link><FontAwesomeIcon icon={faInstagram}/></Link></p></li></ul></div>
    </div>
  </div>
</div>
</div>
  </>
  );
}

export default Signup;