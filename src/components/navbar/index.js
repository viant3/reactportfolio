import "./style.css";
import React from "react";



function Navbar() {
    return (
<nav class="navbar navbar-expand-lg bg-white fixed-top">
<div class="centerPage">
      <div class="row">
                
                <div class="col-sm-6">
                      <h1>Victor Politano</h1>
                </div>    
              
                <div class="col-sm-6 containerNav">
                      <a class="a" href="/contact">Contact</a>
                      <a class="a" href="/portfolio">Portfolio</a>
                      <a class="a" href="/">About</a>
                 </div>
                 
      </div>                                   
  </div>
</nav>
  )
};

export default Navbar;