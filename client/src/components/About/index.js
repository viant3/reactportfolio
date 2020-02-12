import "./style.css";
import React from "react";
import $ from "jquery";

import myHead from "../../pages/images/myhead.jpg"

import BtnX from "../btnX";


function About() {


    function hideMain() {
        $(".mainBox2").addClass("hidden2");
    }

    return (
        <div className=" container-fluid mainBox2">
            <div className="closeMe" onClick={hideMain} ><BtnX />
            </div>

            <div className="row">
                <div className="col"><h2>About Me</h2></div>
            </div>

            <hr />
            <div className="row">
                <div className="col-lg-3"> <img className="img-fluid imgSize2" src={myHead} alt="Victor Politano" /></div>

                <div className="col-lg-8 moveRight2">
                    <p>
                    My name is Victor Politano. I am a graduate of the University of Central Florida’s Full Stack Web 
                    Development Bootcamp and have certificates in Web Design and Computer Programming from Valencia College.
                     I am a MERN Developer, (MongoDB, Express, React, and Node.) I have strong fundamental HTML, CSS, 
                     JavaScript, and jQuery skills. I am an excellent problem solver and I am excited to build applications 
                     with a team who shares my passion for coding.
                                        </p>
                                      
                    <p>This site is a Full Stack MERN Site. It will change often as I sharpen my React skills. Take a minute
                       to look around and please sign my guestbook before leaving. It saves your info to a MongoDB Table. 
                                        </p>
                    <p>I can be contacted by email at<a href="mailto:viant3ucf@gmail.com"> viant3UCF@gmail.com</a><br />
                       Or by phone (407)-361-6832
                                        </p>
            
                    

                </div>

            </div>

        </div>

    );
};


export default About;