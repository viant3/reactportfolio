import "./style.css";

import $ from "jquery";

import React from "react";

import NSA from "../../pages/images/nsaBuild.jpg";
import doctor from "../../pages/images/doctor.jpg";
import trivia from "../../pages/images/triviaChuck.jpg";
import biohazzard from "../../pages/images/biohazzard.jpg";
import liri from "../../pages/images/liri.jpg";
import claws from "../../pages/images/claws.jpg";

import BtnX from "../btnX";


function Portfolio() {


    function hideMain3() {
        $(".mainBox3").addClass("hidden3 ");
    }

  
        return (

            <div>
            <div className="container-fluid mainBox3 hidden3">
            <div className="closeMe" onClick={hideMain3} ><BtnX />
            </div>
              

                


                    <div className="row">
                        <div className="col"><h2>Victor Politano's Portfolio</h2></div>
                    </div>

                    <hr />
                    <div className="row" >
                        <div className="column col-lg-3 d">
                            <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/project1/">
                                <img className="roundCorner" src={doctor} alt="Doctor Kevorkian" />
                                <div className="floatText">The Doctor is In</div>
                            </a>
                        </div>

                        <div className="col-lg-1"></div>

                        <div className="col-lg-3 d">
                            <a target="_blank" rel="noopener noreferrer" href="https://ucfp2.herokuapp.com/">
                                <img className="roundCorner" src={claws} alt="Project 2" />
                                <div className="floatText">Project 2 MySQL</div>
                            </a>
                        </div>
                        <div className="col-lg-1"></div>

                        <div className="col-lg-3 d">
                            <a target="_blank" rel="noopener noreferrer" href="//vpdcproj3.herokuapp.com/">
                                <img className="roundCorner" src={NSA} alt="NSA Search" />
                                <div className="floatText">NSA Search</div>
                            </a>
                        </div>

                    </div>

                    <div className="row" >
                        <div className="col-lg-3 d">
                            <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/TriviaGame/">
                                <img className="roundCorner" src={trivia} alt="Chuck Norris Trivia" />
                                <div className="floatText">Chuck Trivia</div>
                            </a>
                        </div>

                        <div className="col-lg-1"></div>

                        <div className="col-lg-3 d">
                            <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/unit-4-game/">
                                <img className="roundCorner" src={biohazzard} alt="Crystal Game" />
                                <div className="floatText">Crystal Game</div>
                            </a>
                        </div>
                        <div className="col-lg-1"></div>

                        <div className="col-lg-3 d">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/viant3/liri-node-app">
                                <img className="roundCorner" src={liri} alt="Liri Node App" />
                                <div className="floatText">Liri Node App</div>
                            </a>
                        </div>


                    </div>


               
                
            </div>
            </div >

        );
    }


export default Portfolio;