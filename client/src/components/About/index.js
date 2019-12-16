import "./style.css";
import React from "react";
import myHead from "../../pages/images/myhead.jpg"



function About() {

    return (
        <div className="container-fluid mainBox2">

            <div className="row">
                <div className="col"><h2>About Me</h2></div>
            </div>

            <hr />
            <div className="row">
                <div className="col-lg-3"> <img className="img-fluid imgSize2" src={myHead} alt="Victor Politano" /></div>

                <div className="col-lg-8 moveRight2">
                    <p>
                        My name is Victor Politano. I am a recent graduate of the University of Central Florida’s Full Stack
                        Web Developer Bootcamp and have certifications in Web Design and Programming from Valencia College. I
                        am skilled in the MERN Stack, (MongoDB, Express, React, and Node), and have strong fundamental HTML,
                        CSS, and JavaScript skills. I am an excellent problem solver and I am excited to build applications with
                        a team that shares my passion for coding.
                                       </p>
                     <p>This site is and will always be a work-in-progress… keep checking back for new updates.
                                        </p>
                     <p>My GitHub repo for this site is <a target="_blank" rel="noopener noreferrer" href="https://github.com/viant3/reactportfolio">HERE</a>.
                                         </p>

                   
                </div>

            </div>

        </div>

    );
};


export default About;