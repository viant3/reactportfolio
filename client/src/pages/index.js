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
                                My name is Victor Politano. I work at C&S Press in Orlando. C&S Press is a printing press.
                                We print everything from business cards to books. In the not so distant future, the age of the
                                printing press will be over. Printing companies all over the world will go the way of Blockbuster Video.
                                They will die a miserable death at the hands of their digital rivals.
                                              </p>

                            <p>
                                I was married for 16 years and it nearly killed me. I was also in the Marine Corps. Being a Marine
                                was easier than being married...
                                              </p>

                            <p>
                                I live with my girlfriend and three dogs. Bruno, a chihuahua and poodle mix. Harley, a yorkie and poodle mix.
                                And Penelope, an American Bulldog. Bruno and Harley share the same mom... she was a popular poodle...
                                              </p>
                        </div>
                    </div>

            </section>

        );
    }
}

export default index;