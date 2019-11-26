import "./style.css";
import React, { Component } from "react";
import myHead from "./images/myhead.jpg"

class index extends Component {

    render() {
        return (

            <section className="container-fluid mainBox">

                <div className="row">
                    <div className="col"><h2>About Me</h2></div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-lg-3"> <img className="img-fluid imgSize" src={myHead} alt="Victor Politano" /></div>

                        <div className="col-lg-8">
                            <p>
                                My name is Victor Politano. I am a recent graduate of the University of Central Florida’s Full Stack
                                Web Developer Bootcamp and have certifications in Web Design and Programming from Valencia College. I
                                am skilled in the MERN Stack, (Mongo, Express, React, and Node), and have strong fundamental HTML,
                                CSS, and JavaScript skills. I am an excellent problem solver and I am excited to build applications with
                                a team that shares my passion for coding.
                                              </p>

                            <p>
                                This site is a Full MERN Stack reproduction of my initial static HTML Portfolio page that I created in school. 
                                The original page can be seen <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/Portfolio/">HERE</a>.
                
                                              </p>
                            <p>
                                Please take a minute to let me know you were here by signing my <a href="#/visitor">GUESTBOOK</a>
                                              </p>
                            <p> My GitHub repo for this sight is <a target="_blank" rel="noopener noreferrer" href="https://github.com/viant3/reactportfolio">HERE</a>.</p>

                            
                        </div>
                    </div>

            </section>

        );
    }
}

export default index;