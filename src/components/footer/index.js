import gitCat from "./gitCat.png";
import linkedIn from "./linkedIn.png";
import "./style.css";
import React from "react";



function Footer() {
    return (
        <div class="footer">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/viant3"><img className="footImg img-fluid" src={gitCat} alt="GIT" /></a>
          vp  <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/victor-politano-a14b98151"><img className="footImg img-fluid"
          src={linkedIn} alt="LINKEDIN" /></a>
    </div>
  )
};

export default Footer;