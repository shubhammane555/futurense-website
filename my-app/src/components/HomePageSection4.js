import React, { Component } from 'react'
import './HomePageSection4.css';
import mask from "../asset/Masklogohome_sec1.svg"
import Line from "../asset/Line.svg"
import Lineend from "../asset/Lineend.svg"
import { Fade } from "react-awesome-reveal";

export default class HomePageSection4 extends Component {
  render() {
    return (
      <div class="container">
        <div className='row row-content' >
        <div className='col-lg-12 col-md-12 col-sm-12 text-content'>
            <p>After 12 Months, <br></br><span className='text-content-1'>
You have the option of converting our <span className='text-content-color'>talent to Full-Time Employees at</span>  No Cost..</span></p><br></br>

        </div>
        {/* <div class="col-lg-1 col-md-2 d-none d-lg-block">
        <img src={mask} alt="bacground-img"/>
    </div> */}
   
        </div>
        <div className='row row-content-1'>
        <div className='col-lg-12 col-md-12 col-sm- '>
        <p className='text-content-2'>What makes us <span className='text-content-color1'>different..</span></p>
        </div>
        </div>
      
  <div class="row row-content-2">
    <div class="col">
      <div class="p">Traditional Way</div>
    </div>
    <div class="col">
      <div class="p">Huddle Way</div>
    </div>
  </div>
  <Fade bottom distance="50%" duration={3000}>
    <div class="container">
<div class="col-lg-6 offset-lg-3 scrolling">
  <h1 class="buttonscroll">Sourceing</h1>
  <img src={Line} alt='background img'/>
</div>

{/* section1 */}
<div class="row row-content-3">
<div class="col-lg-5 content-3">
  <p class="yellow-text-content">Generic <br></br>Sourcing</p>
  <p>Generic approach taken by staffing <br></br>companies while sourcing <br></br>candidate</p>
</div>
<div class="col-lg-2">
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/>
</div>

<div class="col-lg-5 content-3-1">
  <p class="yellow-text-content">Unparalleled<br></br> Sourcing</p>
  <p>Untapped Talent pool from Tier <br></br>2/3 towns sourced based on their <br></br>potential strength instead of actual <br></br>strength</p>
</div>
</div>
{/* 
section2 */}
<div class="row row-content-3">
<div class="col-lg-5 content-3">
  <p class="yellow-text-content">Time consuming  <br></br>interview process</p>
  <p>1000s of interviews (Avg. Industry <br></br>Interview-to-hire ratio is 13:1) </p>
</div>
<div class="col-lg-2">
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/>
</div>

<div class="col-lg-5 content-3-1">
  <p class="yellow-text-content">Hassle free <br></br>interview process</p>
  <p>Hire in hours, not days! Extraordinary<br></br> Interview-to-hire ratio of 10:7</p>
</div>
</div>
{/* 
section3 */}
<div class="row row-content-3">
<div class="col-lg-5 content-3">
  <p class="yellow-text-content">Unforeseen dropouts</p>
  <p>Long notice periods resulting into <br></br>dropouts/offer shopping </p>
</div>
<div class="col-lg-2">
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/>
</div>
<div class="col-lg-5 content-3-1">
  <p class="yellow-text-content">Predictability</p>
  <p>Talent available on-the-go. ZERO <br></br>notice periods.</p>
</div>
</div>
<Fade Top>
  <div class="container">
{/* scrolling2 */}
<div class="col-lg-6 offset-lg-3 scrolling">
  <h1 class="buttonscroll">Quality of Talent</h1>
  <img src={Line} alt='background img'/>
</div>
{/* section1 */}
<div class="row row-content-3">
<div class="col-lg-5 content-3">
  <p class="yellow-text-content">Probationary Talent</p>
  <p>Needs training before starting with <br></br>actual work </p>
</div>
<div class="col-lg-2">
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/>
</div>

<div class="col-lg-5 content-3-1">
  <p class="yellow-text-content">Job-ready Talent</p>
  <p>Talent ready to hit the ground <br></br>running from Day 1 </p>
</div>
</div>
{/* 
section2 */}
<div class="row row-content-3">
<div class="col-lg-5 content-3">
  <p class="yellow-text-content">Generic Talent</p>
  <p>Talent with a skillset not specific to<br></br> your business’s needs </p>
</div>
<div class="col-lg-2">
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/>
</div>

<div class="col-lg-5 content-3-1">
  <p class="yellow-text-content">Customized Talent</p>
  <p>Tailor-made Talent trained as per <br></br>your business’s requirements</p>
</div>
</div>
</div>
</Fade>
<Fade Top>
<div class="container">
{/* scrolling3 */}
<div class="col-lg-6 offset-lg-3 scrolling">
  <h1 class="buttonscroll">Retention & Procurement</h1>
  <img src={Line} alt='background img'/>
</div>
{/* section1 */}
<div class="row row-content-3">
<div class="col-lg-5 content-3">
  <p class="yellow-text-content">Employee Retention</p>
  <p>No employee-engagement leading <br></br>to high attrition rate </p>
</div>
<div class="col-lg-2">
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/>
</div>

<div class="col-lg-5 content-3-1">
  <p class="yellow-text-content">Attrition Proof Talent</p>
  <p>Less than 6% attrition rate with a 7-<br></br>day replacement commitment </p>
</div>
</div>
{/* 
section2 */}
<div class="row row-content-3">
<div class="col-lg-5 content-3">
  <p class="yellow-text-content">Procurement Delay</p>
  <p>BGV, legalities, compliance and so<br></br> on... It’s a headache, right? </p>
</div>
<div class="col-lg-2">
<img src={Line} alt='background img'/><br></br>
<img src={Line} alt='background img'/><br></br>
{/* <img src={Lineend} alt='background img' class="lineend"/> */}
</div>

<div class="col-lg-5 content-3-1">
  <p class="yellow-text-content">Swift Procurement</p>
  <p>BGV, payroll, legalities, anything<br></br> related to procurement – get a 🍿<br></br> and watch the show!</p>
</div>
</div>
</div>
</Fade>
</div>



</Fade>

</div>

      
    )
  }
}
