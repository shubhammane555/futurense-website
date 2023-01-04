
import React, { Component } from 'react'
import './Navbar.css'; 
import logo from "../asset/futurnese_logo.svg"

export default class NavbarComp extends Component {
  render() {
    return (
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <a class="navbar-brand" href="#">  
  <img src={logo}
             
              class="logo-img "    alt=""/>

  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav justify-content-end "  style={{ width: "90%" }}>
      <a class="nav-link active" href="#"><p>About</p><span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#"><p>Hire from us</p></a>
      <a class="nav-link" href="#"><p>Apply to upskill</p></a>
      <a class="nav-link "><p>FuturenseUni</p></a>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
