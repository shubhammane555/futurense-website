import React, { Component } from 'react'
import mask from "../asset/Masklogohome_sec1.svg"
import './HomePageSection1.css';

export default class HomePageSection1 extends Component {
  render() {
    return (
      <div>
        <div class="container-section1">
<div class="row">
    <div class="col-lg-2 col-md-2 d-none d-lg-block">
        <img src={mask} alt="bacground-img"/>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text "style={{zIndex:"1"}}>
      <h1 class="white-text">Untapped and <br></br>
<span class="yellow-text" >Custom-Trained Talent<br></br> </span>from Tier 2/3 Cities Tailored <br></br><span class="yellow-text" >just for you..</span></h1>
    </div>
<div class="col-lg-6 col-mg-6 col-sm-12 col-xs-12  ">
<h1 class="gif ">GIF</h1>
</div>

</div>
        </div>
      </div>
    )
  }
}
