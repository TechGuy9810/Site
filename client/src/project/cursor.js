import React from "react";
import './cursor.css';
import { useState,useEffect,useRef } from "react";
const Cursor =()=>{
const varRef = useRef();
 useEffect(()=>{
    window.addEventListener("mousemove",function(a){
        varRef.current.style.left = a.x+"px";
        varRef.current.style.top = a.y+"px";
        });
 },[]);
    return(
<>

<div class="cursormain" ref={varRef}>
</div>
</>
    );
}
export default Cursor;