import "./style2.css"

import $ from "jquery";

import React, { Component } from "react";
import Moment from 'react-moment';





class index2 extends Component {

    componentDidMount() {
        $('.winMenu').addClass("hidden");
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 15000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }



    render() {



        const date = new Date();

        function show() {

            $('.winMenu').addClass("hidden");


            $('.winStart').click(function () {


                if ($(".winMenu").hasClass("hidden")) {
                    $(".winMenu").removeClass("hidden").addClass("visible");

                } else {
                    $(".winMenu").removeClass("visible").addClass("hidden");
                }
            });
        }

        function hide() {


            $('.hideMenu').click(function () {
                    $(".winMenu").removeClass("visible").addClass("hidden");

            });
        }

        
        return (

            <div>


                <div className="col-sm-12 windows">
                    <div className="hideMenu" onClick={hide}></div>
                </div>

                <div className="winMenu">
                    <div className="winMenuHeader">Victor Politano</div>
                    <div className="winMenuItem"><a target="_blank" rel="noopener noreferrer" href="#/portfolio">My Portfolio</a></div>
                    <div className="winMenuItem"><a target="_blank" rel="noopener noreferrer" href="https://github.com/viant3">My Github</a></div>
                    <div className="winMenuItem"> <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/victor-politano-a14b98151">My LinkedIn</a></div>
                    <div className="winMenuItem"><a target="_blank" rel="noopener noreferrer" href="#/visitor">Sign My Guestbook</a></div>
                    <div className="winMenuItem"><a href="#/vpTest">HOME</a></div>

                </div>



                <div className="winFooter">

                    <div className="winStart" onClick={show}>Start</div>
                    <div className="divRight"><Moment format='h:mm a'>{date}</Moment><br />
                    <Moment format='MMMM Do YYYY'>{date}</Moment></div>
                </div>

            </div>

        );
    }
}

export default index2;