import "./style.css";
import React, { Component } from "react";


class contact extends Component {

    render() {
        return (

            <section class="container-fluid mainBox">

                <div class="row">
                    <div class="col"><h2>Contact</h2></div>
                </div>

                <hr />

                <form method="POST" action="mailto:viant3ucf@gmail.com" enctype="text/plain" >
                    Name<br />
                    <input type="text" name="Name" class="textBoxStandard" placeholder="John Smith" /><br /><br />
                    Email<br />
                    <input type="text" name="Email" class="textBoxStandard" placeholder="example@Gmail.com" /><br /><br />
                    Message<br />

                    <div class="form-group">
                        <textarea class=" form-control" Name="Message" rows="6" cols="108" wrap="soft"></textarea><br /><br />
                        <input type="submit" value="Submit" />
                    </div>

                </form>
                <br />

            </section>

        );
    }
}

export default contact;