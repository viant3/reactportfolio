import "./style2.css"

import $ from "jquery";

import React, { Component } from "react";
import Moment from 'react-moment';

import About from "../components/About";
import Portfolio from "../components/portfolio";

import Folder from "./images/folder.png";
import DeadCat from "./images/deadCat.png";
import Linked from "./images/linked.png";
import PortfolioPic from "./images/portfolio.png";
// import GB from "./images/gb.png";




class index2 extends Component {

    componentDidMount() {
        $('.winMenu').addClass("hidden");
        $('.backGround').addClass("windows");
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 15000);


        $('.winStart').click(function () {
            if ($(".winMenu").hasClass("hidden")) {
                $(".winMenu").removeClass("hidden").addClass("visible");
            } else {
                $(".winMenu").removeClass("visible").addClass("hidden");
            }
        });

        $('.bgChange').click(function () {

            if ($(".backGround").hasClass("windows")) {
                $(".backGround").removeClass("windows").addClass("windows2");
                $(".base").removeClass("winFooter").addClass("winFooter2");
                $(".start").removeClass("winStart").addClass("winStart2");
                $(".menuHead").removeClass("winMenuHeader").addClass("winMenuHeader2");
            } else {
                $(".backGround").removeClass("windows2").addClass("windows");
                $(".base").removeClass("winFooter2").addClass("winFooter");
                $(".start").removeClass("winStart2").addClass("winStart");
                $(".menuHead").removeClass("winMenuHeader").addClass("winMenuHeader2");
            }
        });

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }



    render() {

        const date = new Date();


        function show() {
           
            $('.winMenu').addClass("hidden");
            $('.start').click(function () {

                if ($(".winMenu").hasClass("hidden")) {
                    $(".winMenu").removeClass("hidden").addClass("visible");
                } else {
                    $(".winMenu").removeClass("visible").addClass("hidden");
                }
            });
        }

        function hide() {
            $(".winMenu").removeClass("visible").addClass("hidden");
        }

        function showAbout() {
            $(".mainBox2").removeClass("hidden2");
            $(".mainBox3").addClass("hidden3");
        }

        function showPortfolio() {
           
            $(".mainBox3").removeClass("hidden3");
        }

    

        

        function mood() {
            $('.backGround').addClass("windows");
            $('.bgChange').click(function () {

                if ($(".backGround").hasClass("windows")) {
                    $(".backGround").removeClass("windows").addClass("windows2");
                    $(".base").removeClass("winFooter").addClass("winFooter2");
                    $(".start").removeClass("winStart").addClass("winStart2");
                    $(".menuHead").removeClass("winMenuHeader").addClass("winMenuHeader2");

                } else {
                    $(".backGround").removeClass("windows2").addClass("windows");
                    $(".base").removeClass("winFooter2").addClass("winFooter");
                    $(".start").removeClass("winStart2").addClass("winStart");
                    $(".menuHead").removeClass("winMenuHeader2").addClass("winMenuHeader");
                    $(".aboutBox").removeClass("mainBox3").addClass("mainBox2");
                }
            });
        }

        return (

            <div>

                <div className="col-sm-12 backGround windows" onClick={hide}>
                    <div className="winCaption">
                        <figure>
                            <img src={Folder} onClick={showAbout} alt="About Me" className="winLinks" />
                            <figcaption>About Me</figcaption>
                        </figure>
                    </div>
                    <div className="winCaption">
                        <figure>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/viant3">
                                <img src={DeadCat} alt="My GitHub" className="winLinks" />
                            </a>
                            <figcaption>My GitHub</figcaption>
                        </figure>
                    </div>
                    <div className="winCaption">
                        <figure>
                            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/victor-politano-a14b98151">
                                <img src={Linked} alt="My LinkedIn" className="winLinks" />
                            </a>
                            <figcaption>My Linkedin</figcaption>
                        </figure>
                    </div>
                    <div className="winCaption">
                        <figure>
                                <img src={PortfolioPic} onClick={showPortfolio} alt="My Portfolio" className="winLinks" />
                            <figcaption>My Portfolio</figcaption>
                        </figure>
                    </div>
                   
                    <div onClick={hide}><About /></div>
                   <div ><Portfolio /></div>
                </div>
              

                <div className="winMenu">
                    <div className="menuHead winMenuHeader"><a href="/">Victor Politano</a></div>
                    <div className="winMenuItem" onClick={showPortfolio}>My Portfolio</div>
                    <div className="winMenuItem"><a target="_blank" rel="noopener noreferrer" href="https://github.com/viant3">My Github</a></div>
                    <div className="winMenuItem"> <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/victor-politano-a14b98151">My LinkedIn</a></div>
               
                    <div className="winMenuItem"><a href="/">HOME</a></div>

                </div>



                <div className="base winFooter">

                    <div className="start winStart" onClick={show}>Start</div>
                    <span className="bgChange" onClick={mood}>Mood Change</span>
                    <div className="divRight"><Moment format='h:mm a'>{date}</Moment><br />
                        <Moment format='MMMM Do YYYY'>{date}</Moment></div>
                </div>

            </div>

        );
    }
}

export default index2;