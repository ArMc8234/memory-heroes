import React from "react";

function header(props){
    return (
        <div className={props.alignment}>
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    );
}

export default header;