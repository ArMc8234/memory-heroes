import React from "react";



function navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info" >
            <div className="col-md-3">
                <ul className="nav">
                    <li className="nav-item" id="title">
                        <a href="/">Super Clicks</a>
                    </li>
                    {/* <li className="nav-item" id="result" style={styles.result}><h2><strong>{props.message}</strong></h2></li> */}
                    <li className="nav-item" id="score">Score: {props.score} | Top Score: {props.topScore}</li>
                </ul>

            </div>
            <div className="col-md-6 text-center" id="result"><h2><strong>{props.message}</strong></h2></div>
        </nav>
    );
  }
  
  export default navbar;