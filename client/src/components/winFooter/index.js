import React from "react";

import $ from "jquery";

import "./style.css";



function winFooter() {
$("winStart").click(function(){
    $("winMenu").show();
});

    return (
        <div class="winFooter">
            <div className="winMenu"></div>
            <div className="winStart">Start</div>
    </div>
  )
};

export default winFooter;