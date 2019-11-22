import "./style.css";
import React from "react";



function Navbar() {
    return (
<nav className="navbar navbar-expand-lg bg-white fixed-top">
<div className="centerPage">
      <div className="row">
                
                <div className="col-sm-6">
                      <h1>Victor Politano</h1>
                </div>    
              
                <div className="col-sm-6 containerNav">
                      <a className="a" href="#/visitor">Guestbook</a>
                      <a className="a" href="#/portfolio">Portfolio</a>
                      <a className="a" href="#/">About</a>
                 </div>
                 
      </div>                                   
  </div>
</nav>
  )
};

export default Navbar;