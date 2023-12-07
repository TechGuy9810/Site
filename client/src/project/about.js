import React from 'react';
import './about.css';
import image5 from '../Image/countries.jpg';
import image6 from '../Image/network.jpg';
import image4 from '../Image/cities.jpg';
function About()
{
    return(
        <>
        <div class="about-main">
        <div class="main-container">
      <div class="main-div">
<div class="heading-div"><p>Who We Are!</p></div>
      </div>
     </div>
     <div class="container-about">
  <div class="row">
    <div class="col">
    <div class="show"><h1 data-number="200" class="counter-number">200+</h1></div>
    <div class="tell"><h2>Countires</h2></div>
    </div>
    <div class="col">
<img src={image4}></img>
    </div>
  </div>
</div>
<div class="container-about" id='containerabout1'>
  <div class="row">
  <div class="col">
  <img src={image6}></img>
    </div>
    <div class="col">
    <div class="show"><h1 data-number="200" class="counter-number">10</h1></div>
    <div class="tell"><h2>States</h2></div>
    </div>
  </div>
</div>
<div class="container-about">
  <div class="row">
    <div class="col">
    <div class="show"><h1 data-number="200" class="counter-number">1000+</h1></div>
    <div class="tell"><h2>Hotels</h2></div>
    </div>
    <div class="col">
    <img src={image5}></img>
    </div>
  </div>
</div>
<div class="greet"></div>
</div>
        </>
    )
}
export default About;