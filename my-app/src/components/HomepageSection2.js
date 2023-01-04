import React  from 'react'
import  { useRef} from "react";
import './HomepageSection2.css';

export  default function HomepageSection2(){

  const card1ref = useRef(null);
  const card2ref = useRef(null);
  const card3ref = useRef(null);
  const card4ref = useRef(null);
  const card5ref = useRef(null);
  const card6ref = useRef(null);
 
  const changeTocard2=()=>{
      card1ref.current.style.transform="translate3d(-1200px,50px,50px)";
      card1ref.cureent.style.transition="1s";
      card2ref.current.style.opacity="0.9";
    }
  
    const changeTocard3=()=>{
      card2ref.current.style.transform="translate3d(-1200px,50px,50px)";
      card2ref.cureent.style.transition="1s";
      card3ref.current.style.opacity="0.9";
    }
    const changeTocard4=()=>{
      card3ref.current.style.transform="translate3d(-1200px,50px,50px)";
      card3ref.cureent.style.transition="1s";
      card4ref.current.style.opacity="0.9";
    }
    const changeTocard5 =()=>{
      card4ref.current.style.transform="translate3d(-1200px,50px,50px)";
      card4ref.cureent.style.transition="1s";
      card5ref.current.style.opacity="0.9";
    }
    const changeTocard6=()=>{
      card5ref.current.style.transform="translate3d(-1200px,50px,50px)";
      card5ref.cureent.style.transition="1s";
      card6ref.current.style.opacity="0.9";
    }
    const changeTocard1=()=>{
      card6ref.current.style.transform="translate3d(-1200px,50px,50px)";
      card6ref.cureent.style.transition="1s";
      card1ref.current.style.opacity="0.9";

      setTimeout(()=>{ window.location.reload(false);}, 300);
    };
 
    
    return (
    <div className='main col-lg-12 col-xs-12 col-md-12 col-sm-12'>
        <div className='container'>
            <p className='statement'><span class="text-1">6 reasons</span> why you should hire Futurense Fellows over any tech professionals!</p>
        </div>
        <div className='maincard'>
        <div className='card1'ref={card1ref}  style={{ position: "absolute", zIndex: 6 }}>
        <div className="col1 col-lg-12 col-xs-12 col-md-12 col-sm-12">
            <h1 className='number'>01</h1>
            <div className='cardtext'>
            <p class="cardtext1">Access to untapped talent from Tier2/3 cities</p>
            <p class="cardtext2">As we invest in Talent from tier 2/3 towns for them to reach their full <br></br>potential, you get access to an untapped talent pool!</p>
        </div>
        <div className='circle'><p className='circletext'></p></div>
        <button type="button" class="button1 btn btn-secondary  btn-lg">Looks intersting,Right?</button>
        <button type="button" class="button2 btn btn-secondary  btn-lg" onClick={changeTocard2}>Give me another reason!</button>
       
       </div>
      </div>
     
      
    
      <div className='card2'ref={card2ref} style={{ position: "absolute", zIndex: 5 }}>
        <div className="col1">
            <h1 className='number'>02</h1>
            <div className='cardtext'>
            <p class="cardtext1">Job Ready Talent from Day 1</p>
            <p class="cardtext2">Talent that is ready to hit the ground running from Day 1 </p>
        </div>
        <div className='circle'><p className='circletext'></p></div>
        <button type="button" class="button1 btn btn-secondary  btn-lg">Looks intersting,Right?</button>
        <button type="button" class="button2 btn btn-secondary  btn-lg" onClick={changeTocard3}>Give me another reason!</button>
       
       </div>
      </div>
      <div className='card3' ref={card3ref}  style={{ position: "absolute", zIndex: 4}}>
        <div className="col1">
            <h1 className='number'>03</h1>
            <div className='cardtext'>
            <p class="cardtext1">Zero Notice Period</p>
            <p class="cardtext2">Talent that can join immediately with all BGV/Compliance <br></br>formalities taken care of.</p>
        </div>
        <div className='circle'><p className='circletext'></p></div>
        <button type="button" class="button1 btn btn-secondary  btn-lg">Looks intersting,Right?</button>
        <button type="button" class="button2 btn btn-secondary  btn-lg"onClick={changeTocard4}>Give me another reason!</button>
       
       </div>
      </div>
      <div className='card4'ref={card4ref}   style={{ position: "absolute", zIndex: 3 }}>
        <div className="col1">
            <h1 className='number'>04</h1>
            <div className='cardtext'>
            <p class="cardtext1">Modular Training</p>
            <p class="cardtext2">Tailor-made Talent, specific to your business needs based on domain and <br></br>tools.</p>
        </div>
        <div className='circle'><p className='circletext'></p></div>
        <button type="button" class="button1 btn btn-secondary  btn-lg">Looks intersting,Right?</button>
        <button type="button" class="button2 btn btn-secondary  btn-lg" onClick={changeTocard5}>Give me another reason!</button>
       
       </div>
      </div>
      <div className='card5'ref={card5ref}   style={{ position: "absolute", zIndex: 2 }}> 
        <div className="col1">
            <h1 className='number'>05</h1>
            <div className='cardtext'>
            <p class="cardtext1">Special Focus on Soft/Behavioral Skills</p>
            <p class="cardtext2">Talent enabled with behavioral & soft skills to match your pedigree.</p>
        </div>
        <div className='circle'><p className='circletext'></p></div>
        <button type="button" class="button1 btn btn-secondary  btn-lg">Looks intersting,Right?</button>
        <button type="button" class="button2 btn btn-secondary  btn-lg"onClick={changeTocard6}>Give me another reason!</button>
       
       </div>
      </div>
      <div className='card6'ref={card6ref}  style={{ position: "absolute", zIndex: 1}}>
        <div className="col1">
            <h1 className='number'>06</h1>
            <div className='cardtext'>
            <p class="cardtext1">Extremely Low Attrition Rate</p>
            <p class="cardtext2">Talent Retention with less than 6% attrition rate and 7-day replacement<br></br> commitment.</p>
        </div>
        <div className='circle'><p className='circletext'></p></div>
        <button type="button" class="button1 btn btn-secondary  btn-lg">Looks intersting,Right?</button>
        <button type="button" class="button2 btn btn-secondary  btn-lg"onClick={changeTocard1}>Give me another reason!</button>
       
       </div>
      </div>
      
        
        </div>
      
        </div>
        
    )
  }

