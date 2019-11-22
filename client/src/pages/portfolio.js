import "./style.css";
import React, { Component } from "react";
import giphy from "./images/giphy.jpg";
import train from "./images/train.jpg";
import psychic from "./images/psychic.jpg";
import doctor from "./images/doctor.jpg";
import trivia from "./images/trivia.jpg";
import biohazzard from "./images/biohazzard.jpg";
import liri from "./images/liri.jpg";
import claws from "./images/claws.jpg";

class Portfolio extends Component {

    render() {
        return (

            <section className="container-fluid mainBox padSection">

                <div className="row">
                    <div className="col"><h2>Portfolio</h2></div>
                </div>

                <hr />
                <div className="row" >
                    <div className="col-lg-3 d">
                        <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/Giftastic/">
                            <img className="roundCorner" src={giphy} alt="Giftastic" />
                            <div className="floatText">Giftastic</div>
                        </a>
                    </div>

                    <div className="col-lg-1"></div>

                    <div className="col-lg-3 d">
                        <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/TrainTime/">
                            <img className="roundCorner" src={train} alt="Train Scheduler" />
                            <div className="floatText">Train Time</div>
                        </a>
                    </div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-3 d">
                        <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/Psychic-Game/">
                            <img className="roundCorner" src={psychic} alt="Psychic Game" />
                            <div className="floatText">Psychic Game</div>
                        </a>
                    </div>

                </div>

                <div className="row" >
                    <div className="column col-lg-3 d">
                        <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/TriviaGame/">
                            <img className="roundCorner" src={trivia} alt="Trivia Game" />
                            <div className="floatText">Trivia Game</div>
                        </a>
                    </div>

                    <div className="col-lg-1"></div>

                    <div className="column col-lg-3 d">
                        <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/project1/">
                            <img className="roundCorner" src={doctor} alt="Doctor Kevorkian" />
                            <div className="floatText">The Doctor is In</div>
                        </a>
                    </div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-3 d">
                        <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/unit-4-game/">
                            <img className="roundCorner" src={biohazzard} alt="Crystal Game" />
                            <div className="floatText">Crystal Game</div>
                        </a>
                    </div>

                </div>


                <div className="row" >
                    <div className="col-lg-3 d">
                        <a target="_blank"  rel="noopener noreferrer" href="https://github.com/viant3/liri-node-app">
                            <img className="roundCorner" src={liri} alt="Liri Node App" />
                            <div className="floatText">Liri Node App</div>
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

                    </div>

                </div>
     

       
</section >

        );
    }
}

export default Portfolio;